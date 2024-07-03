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

const widthVP = window.innerWidth;

function splitHandler(arr) {
  // If the array length is less than or equal to 9, return the original array
  if (arr.length <= 9) {
    return [arr];
  }
  const spliter = widthVP < 768 ? 9 : 10;
  // Split the array into chunks of 9 elements
  let result = [];
  for (let i = 0; i < arr.length; i += spliter) {
    result.push(arr.slice(i, i + spliter));
  }

  return result;
}
if (widthVP < 1440) {
  console.log(splitHandler(recievedData));
}

let items = '';

recievedData.forEach(e => {
  const item = `<li class="practice-list-item"></li>`;
  items += item;
});
favoritesListRef.innerHTML = items;
