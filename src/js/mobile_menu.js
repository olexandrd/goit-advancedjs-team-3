import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const menuLinks = document.querySelectorAll('.mobile-menu-link');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  if (!isMenuOpen) {
    disableBodyScroll(document.body);
    document.addEventListener('keydown', onEscKeyPress);
    mobileMenu.addEventListener('click', onBackdropClick);
  } else {
    enableBodyScroll(document.body);
    document.removeEventListener('keydown', onEscKeyPress);
    mobileMenu.removeEventListener('click', onBackdropClick);
  }
};

const onEscKeyPress = e => {
  if (e.key === 'Escape') {
    toggleMenu();
  }
};

const onBackdropClick = e => {
  if (e.target === mobileMenu) {
    toggleMenu();
  }
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  enableBodyScroll(document.body);
  document.removeEventListener('keydown', onEscKeyPress);
  mobileMenu.removeEventListener('click', onBackdropClick);
});

export {};
