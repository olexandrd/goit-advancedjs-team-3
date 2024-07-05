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

const ratingStarSize = 18;

function createRatingStarsMarkup(rating) {
  const fullStar = `<svg class="exercise-rating-star" width="${ratingStarSize}" height="${ratingStarSize}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--yellow);"></use></svg>`;
  const emptyStar = `<svg class="exercise-rating-star" width="${ratingStarSize}" height="${ratingStarSize}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--light-20);"></use></svg>`;
  const partialStarTemplate = percentage => `
        <svg class="exercise-rating-star" width="${ratingStarSize}" height="${ratingStarSize}" viewBox="0 0 32 32">
            <defs>
                <linearGradient id="partial-star-${percentage}">
                    <stop offset="${percentage}%" stop-color="var(--yellow)" />
                    <stop offset="${percentage}%" stop-color="var(--light-20)" />
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

export function createExerciseMarkup(exercise) {
  const exerciseDataMarkup = createExerciseDataMarkup(exercise);
  const ratingStarsMarkup = createRatingStarsMarkup(exercise.rating);

  const markup = `
    <img class="exercise-instruction-image" src="${exercise.gifUrl}" alt="${exercise.name} instruction">
    <p class="exercise-name">${exercise.name}</p>
    <div class="exercise-rating-wrapper">
      <p class="exercise-rating">${Number.isInteger(exercise.rating) ? exercise.rating.toFixed(1) : exercise.rating}</p>
      <div class="exercise-rating-stars-wrapper">${ratingStarsMarkup}</div>
    </div>
    <ul class="exercise-data">${exerciseDataMarkup}</ul>
    <p class="exercise-description">${exercise.description}</p>
  `;

  return markup;
}
