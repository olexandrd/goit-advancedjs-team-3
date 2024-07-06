import { dataOptions, refs } from './constants';
import { serviceGetExercises, serviceGetFilters } from './services';
import { renderCategories } from './renderCategories';
import { renderPagination } from './renderPagination';
import { renderExercises } from './renderExercises';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fadeItems() {
  const items = document.getElementsByClassName('fade-item');

  for (let i = 0; i < items.length; ++i) {
    fadeIn(items[i], i * 100);
  }
  function fadeIn(item, delay) {
    setTimeout(() => {
      item.classList.add('fadein');
    }, delay);
  }
}

function rerender() {
  serviceGetFilters()
    .then(data => {
      dataOptions.totalPages = data.totalPages;
      renderCategories(data.results);
      renderPagination(data.totalPages, Number(data.page));
      fadeItems();
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

      refs.list.innerHTML = renderExercises(data.results);
      renderPagination(data.totalPages, Number(data.page));
      fadeItems();
    })
    .catch(error => {
      iziToast.error({
        message: `${error}`,
      });
    });
}

export { rerender, rerenderExercises };
