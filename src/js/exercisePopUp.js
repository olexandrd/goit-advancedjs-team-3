import { createExerciseMarkup } from './exercisePopUpMarkup.js';
import { serviceGetExercisesById } from './services.js';
import { refs } from './constants.js';
import iziToast from 'izitoast';
import { removeExerciseFromFavorites } from './favoritesStorageHandler.js';

let exercisePopupAddFavoritesBtn = null;
let exercisePopupRemoveFavoritesBtn = null;

export function openExercisePopUp(exerciseID) {
  renderExercisePopUp(exerciseID)
    .then(exercise => {
      exercisePopupAddFavoritesBtn = null;
      exercisePopupRemoveFavoritesBtn = null;

      exercisePopupAddFavoritesBtn = document.querySelector('#add-favorites');
      exercisePopupRemoveFavoritesBtn = document.querySelector('#remove-favorites');
      // Store exercise data in the button's dataset
      if (exercisePopupAddFavoritesBtn) {
        exercisePopupAddFavoritesBtn.dataset.exercise =
        JSON.stringify(exercise);
        exercisePopupAddFavoritesBtn.addEventListener('click', handleAddToFavorites, { passive: true });
      }

      if (exercisePopupRemoveFavoritesBtn) {
        exercisePopupRemoveFavoritesBtn.dataset.exercise = JSON.stringify(exercise);
        exercisePopupRemoveFavoritesBtn.addEventListener('click', handleRemoveFromFavorites, { passive: true });
      }

      refs.exercisePopUpCloseBtn.addEventListener('click', closeExercisePopUp, { passive: true });
      refs.exercisePopUpBackdrop.addEventListener('click', handleBackdropClick, { passive: true });

      refs.exercisePopUpBackdrop.classList.add('is-open');
      refs.body.classList.add('overflow-hidden');

      document.addEventListener('keydown', handleESCClick);
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
  exercisePopupAddFavoritesBtn = null;
  exercisePopupRemoveFavoritesBtn = null;
  refs.exercisePopUpBackdrop.removeEventListener('click', handleBackdropClick);
  refs.exercisePopUpCloseBtn.removeEventListener('click', closeExercisePopUp);
  document.removeEventListener('keydown', handleESCClick);
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
  const exercise = JSON.parse(
    exercisePopupAddFavoritesBtn.dataset.exercise
  );
  addExerciseToFavorites(exercise);
  event.stopPropagation();
  openExercisePopUp(exercise._id);
}

function handleRemoveFromFavorites(event) {
  const exercise = JSON.parse(
    exercisePopupRemoveFavoritesBtn.dataset.exercise
  );
  removeExerciseFromFavorites(exercise._id);
  event.stopPropagation();
  openExercisePopUp(exercise._id);
}

function handleESCClick(e) {
  if (e.code === 'Escape') {
    closeExercisePopUp();
  }
}
