import { createExerciseMarkup } from './exercisePopUpMarkup.js';
import { serviceGetExercisesById } from './services.js';
import { refs } from './constants.js';
import iziToast from 'izitoast';

export function openExercisePopUp(exerciseID) {
  renderExercisePopUp(exerciseID)
    .then(() => {
      refs.exercisePopUpBackdrop.classList.add('is-open');
      refs.body.classList.add('overflow-hidden');
      addOutsideClickListener();
    })
    .catch(error => {
      iziToast.error({
        message: `${error}`,
      });
    });
}

function closeExercisePopUp() {
  refs.exercisePopUpBackdrop.classList.remove('is-open');
  refs.body.classList.remove('overflow-hidden');
  removeOutsideClickListener(); // removing event listener to prevent memory leaks
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

function addOutsideClickListener() {
  document.addEventListener('click', outsideClickListener);
}

function removeOutsideClickListener() {
  document.removeEventListener('click', outsideClickListener);
}

function outsideClickListener(event) {
  const popup = refs.exercisePopUpContent;
  if (popup && !popup.contains(event.target)) {
    closeExercisePopUp();
  }
}

refs.exercisePopUpCloseBtn.addEventListener('click', closeExercisePopUp);
