import throttle from 'lodash.throttle';
import data from './favorites-temp';

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

function itemHandler(recievedData) {
  let items = '';

  recievedData.forEach(e => {
    const item = `<li class="practice-list-item"></li>`;
    items += item;
  });
  favoritesListRef.innerHTML = items;
}

function resizerHandler() {
  const widthVP = window.innerWidth;
  console.log('logic run again');
  favoritesPaginationRef.classList.add('visually-hidden');

  if (widthVP >= 1440) {
    console.log('loading 1440');
    itemHandler(localData);
  } else if (widthVP >= 768 && widthVP < 1440) {
    console.log('loading 768+');
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
        });
        pages.push(pageItem);
        i += 1;
      });
      favoritesPaginationRef.append(...pages);
    }
  } else {
    console.log('loading 375');
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
        };
        console.log(bindList);

        pageItem.addEventListener('click', e => {
          console.log('click');
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
