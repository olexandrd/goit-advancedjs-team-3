import { refs } from './constants';

function getArrowLeft(className) {
  return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="arrow-icon ${className ?? ''}"
              >
                <path
                  d="M8.83289 10.5917C8.75478 10.5142 8.69279 10.4221 8.65048 10.3205C8.60817 10.219 8.58639 10.11 8.58639 10C8.58639 9.89001 8.60817 9.78109 8.65048 9.67954C8.69279 9.57799 8.75478 9.48582 8.83289 9.40835L12.6579 5.59168C12.736 5.51421 12.798 5.42204 12.8403 5.32049C12.8826 5.21894 12.9044 5.11002 12.9044 5.00001C12.9044 4.89 12.8826 4.78108 12.8403 4.67953C12.798 4.57798 12.736 4.48581 12.6579 4.40834C12.5018 4.25313 12.2905 4.16602 12.0704 4.16602C11.8502 4.16602 11.639 4.25313 11.4829 4.40834L7.65789 8.23335C7.18972 8.7021 6.92676 9.33752 6.92676 10C6.92676 10.6625 7.18972 11.2979 7.65789 11.7667L11.4829 15.5917C11.6381 15.7457 11.8476 15.8324 12.0662 15.8334C12.1759 15.834 12.2846 15.813 12.3861 15.7715C12.4877 15.73 12.58 15.6689 12.6579 15.5917C12.736 15.5142 12.798 15.4221 12.8403 15.3205C12.8826 15.219 12.9044 15.11 12.9044 15C12.9044 14.89 12.8826 14.7811 12.8403 14.6795C12.798 14.578 12.736 14.4858 12.6579 14.4084L8.83289 10.5917Z"
                  fill="#242424"
                />
              </svg>`;
}

function getRightArrow(className) {
  return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="arrow-icon ${className ?? ''}"
              >
                <path
                  d="M11.1671 10.5917C11.2452 10.5142 11.3072 10.4221 11.3495 10.3205C11.3918 10.219 11.4136 10.11 11.4136 10C11.4136 9.89001 11.3918 9.78109 11.3495 9.67954C11.3072 9.57799 11.2452 9.48582 11.1671 9.40835L7.34211 5.59168C7.264 5.51421 7.20201 5.42204 7.1597 5.32049C7.11739 5.21894 7.09561 5.11002 7.09561 5.00001C7.09561 4.89 7.11739 4.78108 7.1597 4.67953C7.20201 4.57798 7.264 4.48581 7.34211 4.40834C7.49824 4.25313 7.70945 4.16602 7.92961 4.16602C8.14976 4.16602 8.36097 4.25313 8.51711 4.40834L12.3421 8.23335C12.8103 8.7021 13.0732 9.33752 13.0732 10C13.0732 10.6625 12.8103 11.2979 12.3421 11.7667L8.51711 15.5917C8.36189 15.7457 8.15239 15.8324 7.93377 15.8334C7.8241 15.834 7.71538 15.813 7.61385 15.7715C7.51232 15.73 7.41997 15.6689 7.34211 15.5917C7.264 15.5142 7.20201 15.4221 7.1597 15.3205C7.11739 15.219 7.09561 15.11 7.09561 15C7.09561 14.89 7.11739 14.7811 7.1597 14.6795C7.20201 14.578 7.264 14.4858 7.34211 14.4084L11.1671 10.5917Z"
                  fill="#242424"
                />
              </svg>`;
}

export function createPaginationItem({ pageId, content, liClassNames }) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.classList.add('pagination-link');
  a.onclick = event => {
    event.preventDefault();
  };
  a.href = '#';
  a.innerHTML = content;

  li.classList.add(...liClassNames.filter(Boolean));
  li.dataset.id = pageId;
  li.appendChild(a);

  return li;
}

export function renderPagination(totalPages, currentPage) {
  const fragment = document.createDocumentFragment();
  const tempArray = Array(totalPages).fill(0);

  if (totalPages > 9) {
    const goToFirstPageItem = createPaginationItem({
      pageId: 1,
      content: `${getArrowLeft('first')}${getArrowLeft('first')}`,
      liClassNames: [
        'pagination-arrow',
        'go-to-first',
        currentPage === 1 ? 'disabled' : '',
      ],
    });
    fragment.appendChild(goToFirstPageItem);

    const goToPrevPageItem = createPaginationItem({
      pageId: currentPage - 1 < 1 ? 1 : currentPage - 1,
      content: getArrowLeft(),
      liClassNames: [
        'pagination-arrow',
        'go-to-prev',
        currentPage === 1 ? 'disabled' : '',
      ],
    });
    fragment.appendChild(goToPrevPageItem);

    let start = currentPage - 1 < 1 ? 1 : currentPage - 1;
    let end = currentPage + 1 > totalPages ? totalPages : currentPage + 1;
    if (end - start < 2) {
      if (start === 1) {
        end = start + 2;
      } else {
        start = end - 2;
      }
    }

    if (start !== 1) {
      const li = createPaginationItem({
        pageId: -1,
        content: '...',
        liClassNames: ['pagination-item', 'three-dots'],
      });
      fragment.appendChild(li);
    }

    tempArray.slice(start - 1, end).map((_, i) => {
      const li = createPaginationItem({
        pageId: start + i,
        content: start + i,
        liClassNames: [
          'pagination-item',
          currentPage === start + i ? 'active' : '',
        ],
      });
      fragment.appendChild(li);
    });

    if (end !== totalPages) {
      const li = createPaginationItem({
        pageId: -1,
        content: '...',
        liClassNames: ['pagination-item', 'three-dots'],
      });
      fragment.appendChild(li);
    }

    const goToNextPageItem = createPaginationItem({
      pageId: currentPage + 1 > totalPages ? totalPages : currentPage + 1,
      content: getRightArrow(),
      liClassNames: [
        'pagination-arrow',
        'go-to-next',
        currentPage === totalPages ? 'disabled' : '',
      ],
    });
    fragment.appendChild(goToNextPageItem);

    const goToLastPageItem = createPaginationItem({
      pageId: totalPages,
      content: `${getRightArrow('last')}${getRightArrow('last')}`,
      liClassNames: [
        'pagination-arrow',
        'go-to-last',
        currentPage === totalPages ? 'disabled' : '',
      ],
    });
    fragment.appendChild(goToLastPageItem);
  } else {
    tempArray.map((_, i) => {
      const li = createPaginationItem({
        pageId: i + 1,
        content: i + 1,
        liClassNames: [
          'pagination-item',
          currentPage === i + 1 ? 'active' : '',
        ],
      });
      fragment.appendChild(li);
    });
  }

  refs.pagination.innerHTML = '';
  refs.pagination.appendChild(fragment);
}
