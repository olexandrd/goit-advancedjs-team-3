import { queryParamsFilters, queryParamsExercises, refs } from './constants';
import { rerender } from './rerender';
import {
  onFilterClick,
  onPaginationClick,
  onExerciseClick,
  onExerciseStartClick,
} from './eventHandlers';
import './search-input';
import { resetExerciseHeader } from './header';

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (e.matches) {
    queryParamsFilters.set('limit', 12);
    queryParamsExercises.set('limit', 10);
  } else {
    queryParamsFilters.set('limit', 9);
    queryParamsExercises.set('limit', 8);
  }

  queryParamsFilters.set('page', 1);
  queryParamsExercises.set('page', 1);

  refs.searchForm.reset();
  refs.searchForm.classList.add('hidden');
  resetExerciseHeader();

  rerender();
});

rerender();

refs.filter.addEventListener('click', onFilterClick);
refs.pagination.addEventListener('click', onPaginationClick);
refs.list.addEventListener('click', onExerciseClick);
refs.exercisesContainer.addEventListener('click', onExerciseStartClick);
