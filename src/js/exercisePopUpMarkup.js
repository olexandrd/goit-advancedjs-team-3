const exerciseDataPropertiesMapping = {
  target: 'Target',
  bodyPart: 'Body Part',
  equipment: 'Equipment',
  popularity: 'Popular',
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

  const partialStarTemplate = percentage => `
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

function isExerciseInFavoritesList(exerciseID) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return favorites.some(fav => fav._id === exerciseID);
}

function createFavoritesButtonMarkup(exerciseID) {
  return `
    <button class="button popup-btn ${!isExerciseInFavoritesList(exerciseID) ? '' : 'visually-hidden'}" id="add-favorites">
      <span class="button-label">Add to favorites</span>
        <svg class="button-icon icon" width="18" height="18">
          <use href="./images/icons.svg#icon-heart"></use>
        </svg>
    </button>
    <button class="button popup-btn ${isExerciseInFavoritesList(exerciseID) ? '' : 'visually-hidden'}" id="remove-favorites">
      <span class="button-label">Remove from favorites</span>
        <svg class="button-icon icon" width="18" height="18">
          <use href="./images/icons.svg#icon-trash"></use>
        </svg>
    </button>
    `;
}

export function createExerciseMarkup(exercise) {
  const exerciseDataMarkup = createExerciseDataMarkup(exercise);
  const ratingStarsMarkup = createRatingStarsMarkup(exercise.rating);
  const favoritesButtonMarkup = createFavoritesButtonMarkup(exercise._id);

  const markup = `
    <img class="exercise-instruction-image" src="${exercise.gifUrl}" alt="${exercise.name} instruction">
    <div class="exercise-panel-content">
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

    <div class="button-container">
      ${favoritesButtonMarkup}
      <button class="button button--secondary popup-btn js-add-rating">
        <span class="button-label">Give a rating</span>
      </button>
    </div>

    </div>
  `;

  return markup;
}
