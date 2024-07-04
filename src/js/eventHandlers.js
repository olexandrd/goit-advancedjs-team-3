import {
  queryParamsFilters,
  queryParamsExercises,
  FILTERS,
  refs,
} from './constants';
import { rerender, rerenderExercises } from './rerender';
import { resetExerciseHeader, setExerciseHeader } from './header';

function onPaginationClick(e) {
  const target = e.target;
  const paginationItem = target.closest('li.pagination-item');

  if (!paginationItem) return;

  const page = Number(paginationItem.dataset.id);
  queryParamsFilters.set('page', page);
  queryParamsExercises.set('page', page);

  if (refs.exerciseHeaderSpan.dataset.exercise) {
    rerenderExercises();
  } else {
    rerender();
  }
}

function onFilterClick(e) {
  const target = e.target;
  const listItem = target.closest('li[data-filter]');

  if (!listItem) return;

  const activeItems = document.querySelectorAll('.js-filters .active');
  activeItems.forEach(item => item.classList.remove('active'));

  listItem.classList.add('active');

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
  const exerciseItem = target.closest('li.filtered-item');
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
  refs.list.innerHTML = '';
  rerenderExercises();
}

export { onPaginationClick, onFilterClick, onExerciseClick };
