const exerciseDataPropertiesMapping = {
  target: 'Target', bodyPart: 'Body Part', equipment: 'Equipment', popularity: 'Popular',
};

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

const ratingStarSize = 18;

function createRatingStarsMarkup(rating) {
  const fullStar = `
    <div class="rating-star-container">
      <svg class="rating-star rating-star--active">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`;

  const emptyStar = `
    <div class="rating-star-container">
      <svg class="rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`;

  const partialStarTemplate = (percentage) => `
    <div class="rating-star-container">
      <svg class="rating-star">
        <defs>
          <linearGradient id="partial-star-${percentage}">
            <stop offset="${percentage}%" stop-color="var(--yellow)" />
            <stop offset="${percentage}%" stop-color="var(--light-20)" />
          </linearGradient>
        </defs>
        <use href="./images/icons.svg#icon-star" style="fill: url(#partial-star-${percentage});"></use>
      </svg>
    </div>`;

  let ratingRemain = rating;

  let starsMarkup = '';
  for (let i = 0; i < 5; i++) {
    if (ratingRemain >= 1) {
      starsMarkup += fullStar;
    } else if (ratingRemain > 0) {
      starsMarkup += partialStarTemplate(ratingRemain * 100);
    } else {
      starsMarkup += emptyStar;
    }
    ratingRemain--;
  }

  return `
    <div class="rating rating--dark">
      <span class="rating-label">${Number.isInteger(rating) ? rating.toFixed(1) : rating}</span>
      ${starsMarkup}
    </div>`;
}

export function createExerciseMarkup(exercise) {
  const exerciseDataMarkup = createExerciseDataMarkup(exercise);
  const ratingStarsMarkup = createRatingStarsMarkup(exercise.rating);

  const markup = `
    <img class="exercise-instruction-image" src="${exercise.gifUrl}" alt="${exercise.name} instruction">
    <p class="exercise-name">${exercise.name}</p>
    <div class="exercise-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${ratingStarsMarkup}
      </div>
    </div>
    </div>
    <ul class="exercise-data">${exerciseDataMarkup}</ul>
    <p class="exercise-description">${exercise.description}</p>
  `;

  return markup;
}
