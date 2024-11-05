// Intersection Observer for animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.1});

  document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
  });
};

// Smooth scroll
const scrollToMenu = () => {
  document.getElementById('menu').scrollIntoView({
    behavior: 'smooth'
  });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
});

// Handle offline/online status
window.addEventListener('online', () => {
  showNotification('เชื่อมต่ออินเทอร์เน็ตแล้ว');
});

window.addEventListener('offline', () => {
  showNotification('ไม่มีการเชื่อมต่ออินเทอร์เน็ต - กำลังใช้งานแบบออฟไลน์');
});

// Notification system
const showNotification = (message) => {
  const notification = document.createElement('div');
  notification.className = 'notification slide-in';
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
};
