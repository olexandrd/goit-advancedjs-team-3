import {
  queryParamsFilters,
  queryParamsExercises,
  FILTERS,
} from './constants';
import { rerender } from './rerender';

function onPaginationClick(e) {
  const target = e.target;
  const paginationItem = target.closest('li.pagination-item');

  if (!paginationItem) return;

  const page = Number(paginationItem.dataset.id);
  queryParamsFilters.set('page', page);

  rerender();
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

    queryParamsExercises.set('page', 1);

    rerender();
  }
}

export { onPaginationClick, onFilterClick };
