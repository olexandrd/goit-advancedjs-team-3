import { refs } from './constants';

export function renderPagination(totalPages) {
  let markup = '';
  for (let i = 1; i <= totalPages; i++) {
    markup += `<li class="pagination-item" data-id="${i}"><a href="#" onclick="event.preventDefault();" class="pagination-link">${i}</a></li>`;
  }
  refs.pagination.innerHTML = markup;
}
