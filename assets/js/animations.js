// Parallax effect for header
const handleParallax = () => {
  const header = document.querySelector('.header');
  const scrolled = window.pageYOffset;
  header.style.backgroundPositionY = scrolled * 0.5 + 'px';
};

// Floating animation for product cards\
const initFloatingAnimation = () => {
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
};

// Button hover effects
const initButtonEffects = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.classList.add('pulse');
    });
    button.addEventListener('mouseout', () => {
      button.classList.remove('pulse');
    });
  });
};

// Smooth reveal animation for sections
const initSmoothReveal = () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    {threshold: 0.1}
  );

  sections.forEach(section => {
    observer.observe(section);
  });
};

// Cart animation
const initCartAnimation = () => {
  const cartButton = document.querySelector('.cart-button');
  cartButton.addEventListener('click', () => {
    cartButton.classList.add('spin');
    setTimeout(() => {
      cartButton.classList.remove('spin');
    }, 1000);
  });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleParallax);
  initFloatingAnimation();
  initButtonEffects();
  initSmoothReveal();
  initCartAnimation();
});

// Performance optimization
let animationFrame;
const optimizedParallax = () => {
  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame);
  }
  animationFrame = window.requestAnimationFrame(handleParallax);
};

window.addEventListener('scroll', optimizedParallax, {passive: true});