import data from './favorites-temp';

// 2. Convert the array to JSON format
const jsonData = JSON.stringify(data);
// 3. Save this data in localStorage
localStorage.setItem('myData', jsonData);
// 4. Retrieve the data back from localStorage
const retrievedData = localStorage.getItem('myData');
// 5. Convert the retrieved data back to an array
const recievedData = JSON.parse(retrievedData);
const favoritesListRef = document.querySelector('.practice-list');
const favoritesPaginationRef = document.querySelector('.favorites-pagination')
const widthVP = window.innerWidth;

function splitHandler(arr) {
  const spliter = widthVP < 768 ? 8 : 10;
 
  let result = [];
  if (arr.length <= spliter){
    return arr
  } else {
    for (let i = 0; i < arr.length; i += spliter) {
      let chunk = arr.slice(i, i + spliter);
      result.push(chunk);
  }
  return result;
  }

}
function itemHandler() {
  let items = '';

  recievedData.forEach(e => {
    const item = `<li class="practice-list-item"></li>`;
    items += item;
})
favoritesListRef.innerHTML = items;
}
if (widthVP > 1440) {
  itemHandler()

  //просто відмальовка зі скролом
} else if ( widthVP > 768) {
  if (recievedData.length <= 10) {
    itemHandler()

} else {

  //pagination logic
  const data = splitHandler(recievedData)
  console.log ('data')
  console.log (data)
  let pages = ''
  let i = 1;
  data.forEach(()=> {
    pages+=`<li class="favorites-page">${i}</li>`;
    i+=1;
  })
  favoritesPaginationRef.innerHTML = pages;
  favoritesPaginationRef.classList.remove('visually-hidden');

  itemHandler()
};

  
} else {
  if (recievedData.length <= 8) {
    itemHandler()

} else {
  //pagination logic
  itemHandler()
}

}
