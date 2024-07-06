const capitalizeFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function renderExercises(arr, isFavorites = false) {
  return arr
    .map(({ _id, name, rating, bodyPart, burnedCalories, target, time }) => {
      const icon = isFavorites
        ? `<button class="exercise-card-btn exercise-remove-btn" data-exercise-id="${_id}" type="button">
             <svg class="exercise-card-icon-garbage">
               <use href="./images/icons.svg#icon-trash">
              </use>
             </svg>
          </button>`
        : `<p class="exercise-rating">${Number.isInteger(rating) ? rating.toFixed(1) : rating}
                  <svg class="exercise-rating-icon">
                    <use href="./images/icons.svg#icon-star"></use>
                  </svg>
                </p>`;
      return `<li class="exercise-card fade-item">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              ${icon}
            </div>
            <button class="exercise-card-btn exercise-start-btn" data-exercise-id="${_id}" type="button">
              Start<svg class="exercise-start-icon">
                <use href="./images/icons.svg#icon-start-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-card-bottom">
            <div class="exercise-card-title">
              <svg class="exercise-card-icon">
                <use href="./images/icons.svg#icon-run"></use>
              </svg>
              <p class="exercise-card-title-text">${capitalizeFirstLetter(name)}</p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${burnedCalories} / ${time} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${bodyPart}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${target}</div>
              </div>
            </div>
          </div>
        </li>`;
    })
    .join('');
}
