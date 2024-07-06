import { refs } from './constants';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function renderCategories(arr) {
  const markup = arr
    .map(
      ({ filter, name, imgURL }) =>
        `<li class="category-card fade-item" data-filter="${filter}" data-name="${name}">
            <img
              src="${imgURL}"
              alt="${name}"
              class="category-card-img"
              width="80"
              height="80"
            />
            <div class="category-card-content">
            <p class="category-card-title">${capitalizeFirstLetter(name)}</p> 
            <h3 class="category-card-text">${capitalizeFirstLetter(filter)}</h3>
            </div>
        </li>`
    )
    .join('');

  if (refs.list.classList.contains('exercise-list')) {
    refs.list.classList.replace('exercise-list', 'filtered-list');
  }
  refs.list.innerHTML = markup;
}
