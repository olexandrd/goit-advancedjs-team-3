import throttle from 'lodash.throttle';
import { fadeItems } from './rerender.js';
import { renderExercises } from './renderExercises.js';
import { onExerciseStartClick } from './eventHandlers.js';
import {
  getFavoritesData,
  removeExerciseFromFavorites,
} from './favoritesStorageHandler.js';
import { createPaginationItem } from './renderPagination.js';

let localData = [];
const noCardsTextRef = document.querySelector('.favorites-text');
const favoritesListRef = document.querySelector('.practice-list');
const paginationElement = document.querySelector('.js-pagination');

function splitHandler(arr, widthVP) {
  const splitter = widthVP < 768 ? 8 : 10;
  let result = [];
  for (let i = 0; i < arr.length; i += splitter) {
    result.push(arr.slice(i, i + splitter));
  }
  return result;
}

function onExerciseRemoveClick(e) {
  const target = e.target.closest('.exercise-remove-btn');
  if (!target) return;
  const exerciseID = target.getAttribute('data-exercise-id');
  if (exerciseID) {
    removeExerciseFromFavorites(exerciseID);
    resizerHandler(getFavoritesData());
  }
}

function itemHandler(arr) {
  favoritesListRef.innerHTML = renderExercises(arr, true);
  fadeItems();
}

function updatePagination(pages, currentPage) {
  paginationElement.innerHTML = '';
  paginationElement.classList.remove('visually-hidden');
  pages.forEach((page, index) => {
    const pageItem = createPaginationItem({
      pageId: index,
      content: index + 1,
      liClassNames: ['pagination-item', currentPage === index ? 'active' : ''],
    });
    pageItem.addEventListener('click', () => {
      itemHandler(page);
      updatePagination(pages, index);
      favoritesListRef.scrollIntoView({ behavior: 'smooth' });
    });
    paginationElement.appendChild(pageItem);
  });
}

function resizerHandler(data = localData) {
  if (!data.length) {
    noCardsTextRef.classList.remove('visually-hidden');
    return;
  } else {
    noCardsTextRef.classList.add('visually-hidden');
  }

  const widthVP = window.innerWidth;
  paginationElement.classList.add('hidden');
  let itemsPerPage = widthVP < 768 ? 8 : 10;

  if (widthVP >= 1440) {
    itemsPerPage = 10;
  }

  if (data.length <= itemsPerPage) {
    itemHandler(data);
  } else {
    const pages = splitHandler(data, widthVP);
    itemHandler(pages[0]);
    updatePagination(pages, 0);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  localData = getFavoritesData();
  // Initial run
  resizerHandler(localData);
  const throttledHandleResize = throttle(() => resizerHandler(localData), 50);
  // Throttle the resizerHandler function
  window.addEventListener('resize', throttledHandleResize);
  favoritesListRef.addEventListener('click', onExerciseStartClick);
  favoritesListRef.addEventListener('click', onExerciseRemoveClick);
});
