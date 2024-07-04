import { createExerciseMarkup } from './exercisePopUpMarkup.js';
import { serviceGetExercisesById } from './services.js';
import { refs } from './constants.js';
import iziToast from 'izitoast';

export function openExercisePopUp(exerciseID) {
  renderExercisePopUp(exerciseID)
    .then(() => {
      refs.exercisePopUpBackdrop.classList.add('is-open');
    })
    .catch(error => {
      iziToast.error({
        message: `${error}`,
      });
    });
}

function closeExercisePopUp() {
  refs.exercisePopUpBackdrop.classList.remove('is-open');
}

function renderExercisePopUp(exerciseID) {
  return new Promise((resolve, reject) => {
    serviceGetExercisesById(exerciseID)
      .then(data => {
        refs.exercisePopUpContent.innerHTML = createExerciseMarkup(data);
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}

refs.exercisePopUpCloseBtn.addEventListener('click', closeExercisePopUp);
