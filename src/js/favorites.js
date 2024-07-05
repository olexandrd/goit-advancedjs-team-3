import throttle from 'lodash.throttle';
import { fadeItems } from './rerender.js';
import { renderExercises } from './renderExercises.js';
import { onExerciseStartClick } from './eventHandlers.js';

// 1. Retrieve the data from localStorage
const retrievedData = localStorage.getItem('favorites');
// 2. Convert the retrieved data back to an array
const localData = JSON.parse(retrievedData) || [];
const noCardsTextRef = document.querySelector('.favorites-text');
const favoritesListRef = document.querySelector('.practice-list');
const favoritesPaginationRef = document.querySelector('.favorites-pagination');

if (!localData.length) {
  noCardsTextRef.classList.remove('visually-hidden');
  favoritesListRef.classList.add('visually-hidden');
}

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

function itemHandler(arr) {
  favoritesListRef.innerHTML = renderExercises(arr);
  fadeItems();
}

function resizerHandler() {
  const widthVP = window.innerWidth;
  favoritesPaginationRef.classList.add('visually-hidden');

  if (widthVP >= 1440) {
    itemHandler(localData);
  } else if (widthVP >= 768 && widthVP < 1440) {
    if (localData.length <= 10) {
      itemHandler(localData);
    } else {
      favoritesPaginationRef.innerHTML = '';
      favoritesPaginationRef.classList.remove('visually-hidden');
      const data = splitHandler(localData, widthVP);
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
    if (localData.length <= 8) {
      itemHandler(localData);
    } else {
      favoritesPaginationRef.innerHTML = '';
      favoritesPaginationRef.classList.remove('visually-hidden');
      const data = splitHandler(localData, widthVP);
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
  // Initial run
  resizerHandler();
  const throttledHandleResize = throttle(resizerHandler, 50);
  // Throttle the resizerHandler function
  window.addEventListener('resize', throttledHandleResize);
  favoritesListRef.addEventListener('click', onExerciseStartClick);
});
