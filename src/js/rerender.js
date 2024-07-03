import { refs, dataOptions } from '../js/constants';
import { serviceGetFilters } from '../js/services';
import { renderCategories } from '../js/renderCategories';
import { renderPagination } from '../js/renderPagination';

function rerender() {
  serviceGetFilters()
    .then(data => {
      dataOptions.totalPages = data.totalPages;
      renderCategories(data.results);
      renderPagination(data.totalPages);

      Array.from(refs.pagination.childNodes).forEach(p => {
        p.classList.remove('active');
      });

      const activePage = Array.from(refs.pagination.childNodes).find(
        p => p.dataset.id == data.page
      );
      if (activePage) {
        activePage.classList.add('active');
      }
    })
    .catch(error => {
      console.log(error); // TODO toast error message?
    });
}

export { rerender };
