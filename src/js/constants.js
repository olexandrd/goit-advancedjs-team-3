const BASE_URL = 'https://your-energy.b.goit.study/api/';

const refs = {
  list: document.querySelector('.js-filtered-list'),
  filter: document.querySelector('.js-filters'),
  pagination: document.querySelector('.js-pagination'),
  exerciseHeader: document.querySelector('.js-exercise-header'),
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

export const exercisePopUpBackdrop = document.querySelector('.exercise-pop-up-backdrop');
export const exercisePopUpContent = document.querySelector('.exercise-pop-up-content');
export const exercisePopUpCloseBtn = document.querySelector('.exercise-pop-up-close-btn');
