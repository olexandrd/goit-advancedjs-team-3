import { refs, dataOptions } from './constants';
import { serviceGetExercises, serviceGetFilters } from './services';
import { renderCategories } from './renderCategories';
import { renderPagination } from './renderPagination';
import { renderExercises } from './renderExercises';

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

function rerenderExercises(params) {
  serviceGetExercises(params)
    .then(data => {
      renderExercises(data.results);
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
      console.log(error);
    });
}

export { rerender, rerenderExercises };
