import throttle from 'lodash.throttle';
import { fadeItems } from './rerender.js';
import { renderExercises } from './renderExercises.js';
import { onExerciseStartClick } from './eventHandlers.js';
import { getFavoritesData, removeExerciseFromFavorites } from './favoritesStorageHandler.js';

let localData = [];
const noCardsTextRef = document.querySelector('.favorites-text');
const favoritesListRef = document.querySelector('.practice-list');
const favoritesPaginationRef = document.querySelector('.favorites-pagination');

function splitHandler(arr, widthVP) {
  const splitter = widthVP < 768 ? 8 : 10;

  let result = [];
  if (arr.length <= splitter) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i += splitter) {
      let chunk = arr.slice(i, i + splitter);
      result.push(chunk);
    }
    return result;
  }
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

function resizerHandler(data = localData) {
  if (!data.length) {
    noCardsTextRef.classList.remove('visually-hidden');
  }
  const widthVP = window.innerWidth;
  favoritesPaginationRef.classList.add('visually-hidden');

  if (widthVP >= 1440) {
    itemHandler(data);
  } else if (widthVP >= 768 && widthVP < 1440) {
    if (data.length <= 10) {
      itemHandler(data);
    } else {
      favoritesPaginationRef.innerHTML = '';
      favoritesPaginationRef.classList.remove('visually-hidden');
      const data = splitHandler(data, widthVP);
      itemHandler(data[0]);

      let pages = [];
      let i = 1;
      data.forEach(() => {
        const pageItem = document.createElement('li');
        pageItem.classList.add('favorites-page');
        pageItem.textContent = i;
        const currentData = data[i - 1];
        pageItem.addEventListener('click', () => {
          itemHandler(currentData);
          favoritesListRef.scrollIntoView({ behavior: 'smooth' });
        });
        pages.push(pageItem);
        i += 1;
      });
      favoritesPaginationRef.append(...pages);
    }
  } else {
    if (data.length <= 8) {
      itemHandler(data);
    } else {
      favoritesPaginationRef.innerHTML = '';
      favoritesPaginationRef.classList.remove('visually-hidden');
      const data = splitHandler(data, widthVP);
      itemHandler(data[0]);

      let pages = [];
      let i = 1;
      data.forEach(() => {
        const pageItem = document.createElement('li');
        pageItem.classList.add('favorites-page');
        pageItem.textContent = i;
        const currentData = data[i - 1];
        const bindList = () => {
          itemHandler(currentData);
          favoritesListRef.scrollIntoView({ behavior: 'smooth' });
        };

        pageItem.addEventListener('click', e => {
          bindList();
        });
        pages.push(pageItem);
        i += 1;
      });
      favoritesPaginationRef.append(...pages);
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  localData =getFavoritesData();
  // Initial run
  resizerHandler(localData);
  const throttledHandleResize = throttle(resizerHandler, 50);
  // Throttle the resizerHandler function
  window.addEventListener('resize', throttledHandleResize);
  favoritesListRef.addEventListener('click', onExerciseStartClick);
  favoritesListRef.addEventListener('click', onExerciseRemoveClick);
});
