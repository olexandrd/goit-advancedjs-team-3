import {
  queryParamsFilters,
  queryParamsExercises,
  FILTERS,
  refs,
} from './constants';
import { rerender, rerenderExercises } from './rerender';
import { resetExerciseHeader, setExerciseHeader } from './header';
import { openExercisePopUp } from './exercisePopUp.js';

function onPaginationClick(e) {
  const target = e.target;
  const paginationItem =
    target.closest('li.pagination-item:not(.active):not(.three-dots)') ??
    target.closest('li.pagination-arrow:not(.disabled)');

  if (!paginationItem) return;

  const page = Number(paginationItem.dataset.id);
  queryParamsFilters.set('page', page);
  queryParamsExercises.set('page', page);

  if (refs.exerciseHeaderSpan.dataset.exercise) {
    rerenderExercises();
  } else {
    rerender();
  }

  refs.mainSection.scrollIntoView();
}

function onFilterClick(e) {
  const target = e.target;
  const listItem = target.closest('li[data-filter]');

  if (!listItem) return;

  const activeItems = document.querySelectorAll('.js-filters .active');
  activeItems.forEach(item => item.classList.remove('active'));

  listItem.classList.add('active');
  refs.searchForm.reset();
  refs.searchForm.classList.add('hidden');

  const filter = listItem.dataset.filter;
  const filterKey = Object.keys(FILTERS).find(key => FILTERS[key] === filter);

  if (filterKey) {
    queryParamsFilters.set('filter', FILTERS[filterKey]);
    queryParamsFilters.set('page', 1);

    queryParamsExercises.delete('muscles');
    queryParamsExercises.delete('bodypart');
    queryParamsExercises.delete('equipment');
    queryParamsExercises.set('page', 1);

    refs.list.classList.replace('exercise-list', 'filtered-list');

    rerender();
  }
  resetExerciseHeader();
}

function onExerciseClick(e) {
  const target = e.target;
  const exerciseItem = target.closest('li.category-card');
  if (!exerciseItem) return;
  let exerciseFilter = exerciseItem.dataset.filter.toString().toLowerCase();
  if (exerciseFilter === 'body parts') {
    exerciseFilter = 'bodypart';
  }
  const exerciseName = exerciseItem.dataset.name;

  setExerciseHeader(exerciseName);

  queryParamsExercises.set(exerciseFilter, exerciseName);
  queryParamsExercises.set('page', 1);

  refs.list.classList.replace('filtered-list', 'exercise-list');
  refs.searchForm.classList.remove('hidden');

  refs.list.innerHTML = '';
  rerenderExercises();
  refs.mainSection.scrollIntoView();
}

function onSearchFormSubmit(e) {
  e.preventDefault();

  const keyword = refs.searchInput.value.trim();
  queryParamsExercises.set('keyword', keyword);

  rerenderExercises();
}

function onExerciseStartClick(e) {
  const target = e.target.closest('.exercise-start-btn');

  if (!target) return;

  const exerciseID = target.getAttribute('data-exercise-id');
  if (exerciseID) {
    openExercisePopUp(exerciseID);
  }
}

export {
  onPaginationClick,
  onFilterClick,
  onExerciseClick,
  onSearchFormSubmit,
  onExerciseStartClick,
};
