import { createExerciseMarkup } from './exercisePopUpMarkup.js';
import { serviceGetExercisesById } from './services.js';
import { exercisePopUpBackdrop, exercisePopUpCloseBtn, exercisePopUpContent } from './constants.js';
import iziToast from 'izitoast';

export function openExercisePopUp(exerciseID) {
  renderExercisePopUp(exerciseID)
    .then(() => {
      exercisePopUpBackdrop.classList.add('is-open');
    })
    .catch(error => {
      iziToast.error({
        message: `${error}`,
      });
    });
}

function closeExercisePopUp() {
  exercisePopUpBackdrop.classList.remove('is-open');
}

function renderExercisePopUp(exerciseID) {
  return new Promise((resolve, reject) => {
    serviceGetExercisesById(exerciseID)
      .then(data => {
        exercisePopUpContent.innerHTML = createExerciseMarkup(data);
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}

// renderExercisePopUp('64f389465ae26083f39b17a2');

exercisePopUpCloseBtn.addEventListener('click', closeExercisePopUp);
