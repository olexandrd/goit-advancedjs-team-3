import { serviceGetExercisesById } from './services.js';

const exercisePopUpBackdrop = document.querySelector('.exercise-pop-up-backdrop');
const exercisePopUpContent = document.querySelector('.exercise-pop-up-content');
const exercisePopUpCloseBtn = document.querySelector('.exercise-pop-up-close-btn')

const exerciseDataPropertiesMapping = {
  target: 'Target',
  bodyPart: 'Body Part',
  equipment: 'Equipment',
  popularity: 'Popular'
}

function createExerciseDataMarkup (exercise) {
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
};

function createExerciseMarkup(exercise) {
  const exerciseDataMarkup = createExerciseDataMarkup(exercise);

  const markup = `
    <img class="exercise-instruction-image" src="${exercise.gifUrl}" alt="${exercise.name} instruction">
    <p class="exercise-name">${exercise.name}</p>
    <div class="exercise-rating-wrapper">
      <p class="exercise-rating">${exercise.rating}</p>
      <ul class="exercise-data">${exerciseDataMarkup}</ul>
      <p class="exercise-description">${exercise.description}</p>
    </div>
  `

  return markup
}

function renderExercisePopUp(exerciseID) {
  serviceGetExercisesById(exerciseID)
    .then( data => {
      console.log(data)

      exercisePopUpContent.innerHTML = createExerciseMarkup(data)
    }
  )
    .catch(error => {
      console.log(error)
    })
}

renderExercisePopUp('64f389465ae26083f39b17a2')

exercisePopUpCloseBtn.addEventListener('click', () => {
  exercisePopUpBackdrop.classList.remove('is-open');
})