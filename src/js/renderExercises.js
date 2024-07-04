import { refs } from './constants';

export function renderExercises(arr) {
  const markup = arr
    .map(
      ({ name, rating, bodyPart, burnedCalories, target }) =>
        `<li class="exercise-card" >
          <h3 class="exercise-general-header">Workout</h3>
          <p class="exercise-rating">${rating} 
            <svg>
              <use href="./images/icons.svg#icon-star"></use>
            </svg>
          </p> 
          <button class="exercise-start-btn" type="button">
            start
            <svg>
              <use href="./images/icons.svg#icon-start-arrow"></use>
            </svg>
          </button>
          <h2 class="exercise-name">${name}</h2>
          <p class="exercise-text">Burned calories: ${burnedCalories}</p>
          <p class="exercise-text">Body part: ${bodyPart}</p>
          <p class="exercise-text">Target: ${target}</p>
        </li>`
    )
    .join('');

  refs.list.innerHTML = markup;
}
