let cart = [];

const addToCart = (name, price) => {
  cart.push({name, price});
  updateCartCount();
  showNotification(`เพิ่ม${name}ลงตะกร้าแล้ว`);
  saveCartToStorage();
};

const updateCartCount = () => {
  const cartCount = document.querySelector('.cart-count');
  cartCount.textContent = cart.length;
  cartCount.classList.add('pulse');
  setTimeout(() => cartCount.classList.remove('pulse'), 300);
};

const showCart = () => {
  const modal = document.getElementById('cartModal');
  const modalContent = modal.querySelector('.modal-content');
  const cartItems = document.getElementById('cartItems');
  const totalPrice = document.getElementById('totalPrice');

  modal.classList.add('active');
  setTimeout(() => modalContent.classList.add('active'), 10);

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item fade-in';
    cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} บาท</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">
                <span>×</span>
            </button>
        `;
    cartItems.appendChild(cartItem);
    total += item.price;
  });

  totalPrice.textContent = total;
};

const closeCart = () => {
  const modal = document.getElementById('cartModal');
  const modalContent = modal.querySelector('.modal-content');

  modalContent.classList.remove('active');
  setTimeout(() => modal.classList.remove('active'), 300);
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  updateCartCount();
  showCart();
  saveCartToStorage();
};

const submitOrder = () => {
  if (cart.length === 0) {
    showNotification('กรุณาเลือกสินค้าก่อนสั่งซื้อ');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  showNotification(`ขอบคุณสำหรับการสั่งซื้อ\nยอดรวมทั้งสิ้น: ${total} บาท`);

  cart = [];
  updateCartCount();
  closeCart();
  saveCartToStorage();
};

// Local Storage
const saveCartToStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCartFromStorage = () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
};

// Initialize cart from storage
document.addEventListener('DOMContentLoaded', loadCartFromStorage);
