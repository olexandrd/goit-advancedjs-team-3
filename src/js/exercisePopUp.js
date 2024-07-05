import { createExerciseMarkup } from './exercisePopUpMarkup.js';
import { serviceGetExercisesById } from './services.js';
import { refs } from './constants.js';
import iziToast from 'izitoast';

export function openExercisePopUp(exerciseID) {
  renderExercisePopUp(exerciseID)
    .then((exercise) => {
      refs.exercisePopUpBackdrop.classList.add('is-open');
      refs.body.classList.add('overflow-hidden');
      // Store exercise data in the button's dataset
      refs.exercisePopupAddFavoritesBtn.dataset.exercise = JSON.stringify(exercise);

      refs.exercisePopUpCloseBtn.addEventListener('click', closeExercisePopUp, { passive: true });
      refs.exercisePopupAddFavoritesBtn.addEventListener('click', handleAddToFavorites, { passive: true });
      refs.exercisePopUpBackdrop.addEventListener('click', handleBackdropClick, { passive: true });
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
  // Remove all event listeners
  refs.exercisePopupAddFavoritesBtn.removeEventListener('click', handleAddToFavorites);
  refs.exercisePopUpBackdrop.removeEventListener('click', handleBackdropClick);
  refs.exercisePopUpCloseBtn.removeEventListener('click', closeExercisePopUp);
}

function renderExercisePopUp(exerciseID) {
  return new Promise((resolve, reject) => {
    serviceGetExercisesById(exerciseID)
      .then(data => {
        refs.exercisePopUpContent.innerHTML = createExerciseMarkup(data);
        resolve(data); // Resolve with exercise data
      })
      .catch(error => {
        reject(error);
      });
  });
}

function handleBackdropClick(event) {
  if (event.target === refs.exercisePopUpBackdrop) {
    closeExercisePopUp();
  }
}

function addExerciseToFavorites(exercise) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isFavorite = favorites.some(fav => fav._id === exercise._id);
  if (isFavorite) {
    iziToast.warning({
      message: 'Exercise is already in favorites!',
    });
  } else {
    favorites.push(exercise);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    iziToast.success({
      message: 'Exercise added to favorites!',
    });
  }
}

function handleAddToFavorites(event) {
  const exercise = JSON.parse(refs.exercisePopupAddFavoritesBtn.dataset.exercise);
  addExerciseToFavorites(exercise);
  event.stopPropagation();
}
