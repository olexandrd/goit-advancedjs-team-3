const searchForm = document.querySelector('.search-form');
const searchInputCrossIcon = document.querySelector(
  '.search-input-icon.cross-icon'
);

searchInputCrossIcon.addEventListener('click', () => {
  searchForm.reset();
});

export {};
