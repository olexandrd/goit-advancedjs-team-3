import { refs, dataOptions } from './constants';
import { serviceGetExercises, serviceGetFilters } from './services';
import { renderCategories } from './renderCategories';
import { renderPagination } from './renderPagination';
import { renderExercises } from './renderExercises';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
      iziToast.error({
        message: `${error}`,
      });
    });
}

function rerenderExercises() {
  serviceGetExercises()
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
      iziToast.error({
        message: `${error}`,
      });
    });
}

export { rerender, rerenderExercises };
