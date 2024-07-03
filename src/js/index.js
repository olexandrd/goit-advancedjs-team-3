import {
  queryParamsFilters,
  queryParamsExercises,
  refs,
} from '../js/constants';
import { rerender } from '../js/rerender';
import { onFilterClick, onPaginationClick } from '../js/eventHandlers';
import './search-input';

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

  rerender();
});

rerender();

refs.filter.addEventListener('click', onFilterClick);
refs.pagination.addEventListener('click', onPaginationClick);
