const BASE_URL = 'https://your-energy.b.goit.study/api/';

const refs = {
  list: document.querySelector('.js-filtered-list'),
  filter: document.querySelector('.js-filters'),
  pagination: document.querySelector('.js-pagination'),
  exerciseHeaderSpan: document.querySelector('.js-exercise-header-span'),
  exerciseHeader: document.querySelector('.js-exercise-header'),
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchInputCrossIcon: document.querySelector('.search-input-icon.cross-icon'),
  searchInputSearchIcon: document.querySelector(
    '.search-input-icon.search-icon'
  ),
  exercisePopUpBackdrop: document.querySelector('.exercise-pop-up-backdrop'),
  exercisePopUpContent: document.querySelector('.exercise-pop-up-content'),
  exercisePopUpCloseBtn: document.querySelector('.exercise-pop-up-close-btn'),
  exercisesContainer: document.querySelector('.exercises-container'),
  body: document.querySelector('body'),
  scrollUpButton: document.querySelector('.scroll-up-button'),
  mainSection: document.querySelector('.main-section'),
  ratingPopUpBackdrop: document.querySelector('.js-rating-pop-up-backdrop'),
  ratingPopUpContent: document.querySelector('.rating-pop-up-content'),
  ratingPopUpCloseBtn: document.querySelector('.js-close-rating-pop-up'),
  ratingForm: document.querySelector('.form-rating'),
};

const FILTERS = {
  MUSCLES: 'Muscles',
  BODY_PARTS: 'Body parts',
  EQUIPMENT: 'Equipment',
};

const queryParamsFilters = new URLSearchParams({
  filter: FILTERS.MUSCLES,
  page: 1,
  limit: window.matchMedia('(min-width: 768px)').matches ? 12 : 9,
});

const queryParamsExercises = new URLSearchParams({
  page: 1,
  limit: window.matchMedia('(min-width: 768px)').matches ? 10 : 8,
});

const dataOptions = {
  page: 1,
  totalPages: 0,
};

export {
  BASE_URL,
  FILTERS,
  queryParamsFilters,
  queryParamsExercises,
  refs,
  dataOptions,
};
