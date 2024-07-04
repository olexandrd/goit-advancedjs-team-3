import { serviceGetExercisesById } from './services.js';

const exercisePopUpBackdrop = document.querySelector('.exercise-pop-up-backdrop');
const exercisePopUpContent = document.querySelector('.exercise-pop-up-content');
const exercisePopUpCloseBtn = document.querySelector('.exercise-pop-up-close-btn');

const exerciseDataPropertiesMapping = {
  target: 'Target', bodyPart: 'Body Part', equipment: 'Equipment', popularity: 'Popular',
};

export function openExercisePopUp(exerciseID) {
  renderExercisePopUp(exerciseID);
  exercisePopUpBackdrop.classList.add('is-open');
}

function closeExercisePopUp() {
  exercisePopUpBackdrop.classList.remove('is-open');
}

function createExerciseDataMarkup(exercise) {
  let markup = '';

  Object.keys(exerciseDataPropertiesMapping).forEach(key => {
    if (exercise.hasOwnProperty(key)) {
      markup += `
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${exerciseDataPropertiesMapping[key]}</p>
          <p class="exercise-data-parameter-value">${exercise[key]}</p>
        </li>
      `;
    }
  });

  if (exercise.hasOwnProperty('burnedCalories')) {
    markup += `
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${exercise.burnedCalories}/${exercise.time} min</p>
        </li>
      `;
  }

  return markup;
}

const ratingStarSize = 18

function createRatingStarsMarkup(rating) {
  const fullStar = `<svg class="exercise-pop-up-close-icon" width="${ratingStarSize}" height="${ratingStarSize}"><use href="../images/icons.svg#icon-star" style="fill: var(--yellow);"></use></svg>`;
  const emptyStar = `<svg class="exercise-pop-up-close-icon" width="${ratingStarSize}" height="${ratingStarSize}"><use href="../images/icons.svg#icon-star" style="fill: var(--light);"></use></svg>`;
  const partialStarTemplate = (percentage) => `
        <svg class="exercise-pop-up-close-icon" width="${ratingStarSize}" height="${ratingStarSize}">
            <defs>
                <linearGradient id="partial-star-${percentage}">
                    <stop offset="${percentage}%" stop-color="var(--yellow)" />
                    <stop offset="${percentage}%" stop-color="var(--light)" />
                </linearGradient>
            </defs>
            <use href="../images/icons.svg#icon-star" style="fill: url(#partial-star-${percentage});"></use>
        </svg>
    `;

  let starsMarkup = '';
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      starsMarkup += fullStar;
    } else if (rating > 0) {
      starsMarkup += partialStarTemplate(rating * 100);
    } else {
      starsMarkup += emptyStar;
    }
    rating--;
  }

  return starsMarkup;
}

function createExerciseMarkup(exercise) {
  const exerciseDataMarkup = createExerciseDataMarkup(exercise);
  const ratingStarsMarkup = createRatingStarsMarkup(exercise.rating);

  const markup = `
    <img class="exercise-instruction-image" src="${exercise.gifUrl}" alt="${exercise.name} instruction">
    <p class="exercise-name">${exercise.name}</p>
    <div class="exercise-rating-wrapper">
      <p class="exercise-rating">${exercise.rating}</p>
      <div>${ratingStarsMarkup}</div>
      <ul class="exercise-data">${exerciseDataMarkup}</ul>
      <p class="exercise-description">${exercise.description}</p>
    </div>
  `;

  return markup;
}

function renderExercisePopUp(exerciseID) {
  serviceGetExercisesById(exerciseID)
    .then(data => {
      console.log(data);

      exercisePopUpContent.innerHTML = createExerciseMarkup(data);
    })
    .catch(error => {
      console.log(error);
    });
}

renderExercisePopUp('64f389465ae26083f39b17a2');

exercisePopUpCloseBtn.addEventListener('click', closeExercisePopUp);
