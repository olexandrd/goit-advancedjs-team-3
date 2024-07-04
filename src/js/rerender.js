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
      renderPagination(data.totalPages, Number(data.page));
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
      if (!data.results.length) {
        iziToast.warning({
          message:
            'Sorry, this request did not match. Try changing the request parameters.',
        });
      }

      renderExercises(data.results);
      renderPagination(data.totalPages, Number(data.page));
    })
    .catch(error => {
      iziToast.error({
        message: `${error}`,
      });
    });
}

export { rerender, rerenderExercises };
