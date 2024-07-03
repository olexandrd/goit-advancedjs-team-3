import { queryParamsFilters, dataOptions, refs } from '../js/constants';
import { serviceGetFilters } from '../js/services';
import { renderPagination } from '../js/renderPagination';
import { renderCategories } from '../js/renderCategories';
import './search-input';

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (e.matches) {
    queryParamsFilters.set('limit', 12);
  } else {
    queryParamsFilters.set('limit', 9);
  }
  serviceGetFilters();
});

serviceGetFilters()
  .then(data => {
    dataOptions.totalPages = data.totalPages;
    renderCategories(data.results);
    renderPagination(data.totalPages);

    const activePage = Array.from(refs.pagination.childNodes).find(
      p => p.dataset.id == data.page
    );
    activePage.classList.add('active');
  })
  .catch(error => {
    console.log(error); // TODO toast error message?
  });

refs.filter.addEventListener('click', onFilterClick);
function onFilterClick(e) {}
