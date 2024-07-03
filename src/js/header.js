const header = document.querySelector('.header');
const linkHomePage = document.querySelector('[data-home]');
const linkFavoritesPage = document.querySelector('[data-favorites]');
let isScrolled = false;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= 2 && !isScrolled) {
    header.classList.add('header-scrolled');
    isScrolled = true;
  } else if (scrollTop < 2 && isScrolled) {
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
