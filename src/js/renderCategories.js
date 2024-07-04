import { refs } from './constants';

export function renderCategories(arr) {
  const markup = arr
    .map(
      ({ filter, name, imgURL }) =>
        `<li class="filtered-item" data-filter="${filter}" data-name="${name}">
            <img
              src="${imgURL}"
              alt="${name}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${filter}</h3>
            <p class="filtered-text">${name}</p>
        </li>`
    )
    .join('');

  refs.list.innerHTML = markup;
}
