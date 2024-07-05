import iziToast from 'izitoast';
import { refs } from './constants';
import { servicePatchExercisesByIdRating } from './services';

refs.exercisePopupAddRatingBtn.addEventListener('click', onGiveRatingBtnClick);

let activeRating = 0;
let exerciseId;

function onRatingFormSubmit(e) {
  e.preventDefault();

  if (activeRating && exerciseId) {
    servicePatchExercisesByIdRating(exerciseId, {
      rate: Number(activeRating),
      email: refs.ratingForm.elements.email.value,
      review: refs.ratingForm.elements.comment.value,
    })
      .then(() => {
        closeRatingPopUp();
        iziToast.success({
          message: 'Thanks for rating!',
        });
        refs.ratingForm.reset();
      })
      .catch(error => {
        iziToast.error({
          message: error.message,
        });
      });
  } else {
    iziToast.warning({
      message: 'Please select rating',
    });
  }
}

function onStarClick(e) {
  const currentStar = e.target.closest('.rating-star-container');
  if (currentStar) {
    const stars = document.querySelectorAll('.js-rating-star');

    activeRating = currentStar.dataset.id;
    document.querySelector('.js-rating-label').textContent =
      Number(activeRating).toFixed(1);

    for (let i = 0; i < activeRating; i++) {
      stars[i].classList.add('rating-star--active');
    }

    for (let i = activeRating; i < 5; i++) {
      stars[i].classList.remove('rating-star--active');
    }
  }
}

function onGiveRatingBtnClick() {
  exerciseId = JSON.parse(
    document.querySelector('button#add-favorites').dataset.exercise
  )._id;
  refs.exercisePopUpBackdrop.classList.remove('is-open');
  refs.exercisePopUpBackdrop.style.display = 'none';
  refs.ratingPopUpBackdrop.classList.add('is-open');

  refs.ratingPopUpContent.innerHTML = createRatingMarkup();

  refs.ratingPopUpCloseBtn.addEventListener('click', closeRatingPopUp);
  refs.ratingPopUpContent.addEventListener('click', onStarClick);
  refs.ratingForm.addEventListener('submit', onRatingFormSubmit);
}

function closeRatingPopUp() {
  refs.ratingPopUpBackdrop.classList.remove('is-open');
  refs.exercisePopUpBackdrop.style.display = 'flex';
  refs.exercisePopUpBackdrop.classList.add('is-open');

  refs.ratingPopUpCloseBtn.removeEventListener('click', closeRatingPopUp);
  refs.ratingPopUpContent.removeEventListener('click', onStarClick);
  refs.ratingForm.removeEventListener('submit', onRatingFormSubmit);
}

function createRatingStarsMarkup() {
  // <svg class="rating-star rating-star--active">
  let starsMarkup = '';

  for (let i = 0; i < 5; i++) {
    starsMarkup += `
    <div class="rating-star-container" data-id="${i + 1}">
      <svg class="rating-star js-rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`;
  }

  return `
    <div class="rating rating--dark">
      <span class="rating-label js-rating-label">0.0</span>
        ${starsMarkup}
      </div>`;
}

function createRatingMarkup() {
  const ratingStarsMarkup = createRatingStarsMarkup();

  const markup = `
    <p class="rating-data-parameter-name">Rating</p>
    <div class="rating-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${ratingStarsMarkup}
      </div>
    </div>
    </div>
  `;

  return markup;
}
