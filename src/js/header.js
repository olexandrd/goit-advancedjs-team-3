import { refs } from './constants';

const header = document.querySelector('.header');
const linkHomePage = document.querySelector('[data-home]');
const linkFavoritesPage = document.querySelector('[data-favorites]');
let isScrolled = false;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollUpEl = document.querySelector('.scroll-up-button-container');

  if (scrollTop >= 2 && !isScrolled) {
    header.classList.add('header-scrolled');
    scrollUpEl.classList.remove('visually-hidden');
    isScrolled = true;
  } else if (scrollTop < 2 && isScrolled) {
    scrollUpEl.classList.add('visually-hidden');
    header.classList.remove('header-scrolled');
    isScrolled = false;
  }
});

(function setActiveTab() {
  const currentURL = window.location.href;
  if (currentURL.includes('favorites.html')) {
    linkHomePage.classList.remove('active');
    linkFavoritesPage.classList.add('active');
  } else {
    linkHomePage.classList.add('active');
    linkFavoritesPage.classList.remove('active');
  }
})();

function setExerciseHeader(name) {
  refs.exerciseHeader.textContent = 'Exercises /';
  refs.exerciseHeaderSpan.textContent = `${name}`;
  refs.exerciseHeaderSpan.dataset.exercise = name;
}

function resetExerciseHeader() {
  refs.exerciseHeader.textContent = 'Exercises';
  refs.exerciseHeaderSpan.textContent = '';
  refs.exerciseHeaderSpan.dataset.exercise = '';
}

export { setExerciseHeader, resetExerciseHeader };
