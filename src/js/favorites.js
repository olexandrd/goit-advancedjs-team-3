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
const favoritesListRef = document.querySelector('.exercise-list');
const paginationElement = document.querySelector('.js-pagination');

function splitHandler(arr, itemsPerPage) {
  let result = [];
  for (let i = 0; i < arr.length; i += itemsPerPage) {
    result.push(arr.slice(i, i + itemsPerPage));
  }
  return result;
}

function onExerciseRemoveClick(e) {
  const target = e.target.closest('.exercise-remove-btn');
  if (!target) return;
  const exerciseID = target.getAttribute('data-exercise-id');
  if (exerciseID) {
    if (removeExerciseFromFavorites(exerciseID)) {
      resizerHandler(getFavoritesData(), true);
    }
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

  // Hide pagination if there's only one page
  if (pages.length <= 1) {
    paginationElement.classList.add('visually-hidden');
  }
}

export function resizerHandler(data = localData, isDeletion = false) {
  if (!data.length) {
    noCardsTextRef.classList.remove('visually-hidden');
    favoritesListRef.innerHTML = '';
    favoritesListRef.classList.add('hidden');
    paginationElement.classList.add('hidden');
    return;
  } else {
    noCardsTextRef.classList.add('visually-hidden');
    favoritesListRef.classList.remove('hidden');
  }

  const widthVP = window.innerWidth;
  paginationElement.classList.add('hidden');
  let itemsPerPage = widthVP < 768 ? 8 : 10;

  if (widthVP >= 1440) {
    itemsPerPage = 10;
  }

  if (data.length <= itemsPerPage) {
    itemHandler(data);
    paginationElement.classList.add('visually-hidden');
  } else {
    const pages = splitHandler(data, itemsPerPage);
    let currentPage = 0;

    if (isDeletion) {
      const activePageItem = paginationElement.querySelector('.pagination-item.active');
      currentPage = activePageItem
        ? parseInt(activePageItem.getAttribute('data-id'), 10)
        : 0;

      if (currentPage >= pages.length) {
        currentPage = pages.length - 1;
      }
    }

    if (pages.length === 0) {
      noCardsTextRef.classList.remove('visually-hidden');
      paginationElement.classList.add('visually-hidden');
    } else {
      itemHandler(pages[currentPage]);
      updatePagination(pages, currentPage);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('favorites.html')) {
    localData = getFavoritesData();
    // Initial run
    resizerHandler(localData);
    const throttledHandleResize = throttle(() => resizerHandler(localData), 50);
    // Throttle the resizerHandler function
    window.addEventListener('resize', throttledHandleResize);
    favoritesListRef.addEventListener('click', onExerciseStartClick);
    favoritesListRef.addEventListener('click', onExerciseRemoveClick);
  }
});
