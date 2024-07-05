import throttle from 'lodash.throttle';
import data from './favorites-temp';
import { renderExercises } from './renderExercises';
// 2. Convert the array to JSON format
const jsonData = JSON.stringify(data);
// 3. Save this data in localStorage
localStorage.setItem('myData', jsonData);
// 4. Retrieve the data back from localStorage
const retrievedData = localStorage.getItem('myData');
// 5. Convert the retrieved data back to an array
const localData = JSON.parse(retrievedData);
const favoritesListRef = document.querySelector('.practice-list');
const favoritesPaginationRef = document.querySelector('.favorites-pagination');
const headerDtRef = document.querySelector('.exercise-header-dt');
const headerRef = document.querySelector('.exercise-header');
function splitHandler(arr, widthVP) {
  const spliter = widthVP < 768 ? 8 : 10;

  let result = [];
  if (arr.length <= spliter) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i += spliter) {
      let chunk = arr.slice(i, i + spliter);
      result.push(chunk);
    }
    return result;
  }
}
const capitalizeFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};
function itemHandler(arr) {
  const markup = arr
    .map(
      ({ _id, name, rating, bodyPart, burnedCalories, target, time }) =>
        `<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${rating}<svg class="exercise-rating-icon">
                  <use href="./images/icons.svg#icon-star"></use>
                </svg>
              </p> 
            </div>
            <button class="exercise-start-btn" data-exercise-id="${_id}" type="button">
              Start<svg class="exercise-start-icon">
                <use href="./images/icons.svg#icon-start-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-card-bottom">
            <div class="exercise-card-title">
              <svg class="exercise-card-icon">
                <use href="./images/icons.svg#icon-run"></use>
              </svg>
              <p class="exercise-card-title-text">${capitalizeFirstLetter(name)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${burnedCalories} / ${time} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${bodyPart}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${target}</div>
              </div>
            </div>
          </div>
        </li>`
    )
    .join('');

  favoritesListRef.innerHTML = markup;
}

function resizerHandler() {
  const widthVP = window.innerWidth;
  favoritesPaginationRef.classList.add('visually-hidden');

  if (widthVP >= 1440) {
    headerDtRef.classList.remove('visually-hidden');
    headerRef.classList.add('visually-hidden');
    itemHandler(localData);
  } else if (widthVP >= 768 && widthVP < 1440) {
    headerDtRef.classList.add('visually-hidden');
    headerRef.classList.remove('visually-hidden');
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
        const curentData = data[i - 1];
        pageItem.addEventListener('click', () => {
          itemHandler(curentData);
          favoritesListRef.scrollIntoView({ behavior: 'smooth' });
        });
        pages.push(pageItem);
        i += 1;
      });
      favoritesPaginationRef.append(...pages);
    }
  } else {
    headerDtRef.classList.add('visually-hidden');
    headerRef.classList.remove('visually-hidden');
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
        const curentData = data[i - 1];
        const bindList = () => {
          itemHandler(curentData);
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

// Initial run
resizerHandler();

// Throttle the resizerHandler function
const throttledHandleResize = throttle(resizerHandler, 50);
window.addEventListener('resize', throttledHandleResize);
