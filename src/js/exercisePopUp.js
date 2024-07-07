import { createExerciseMarkup } from './exercisePopUpMarkup.js';
import { serviceGetExercisesById } from './services.js';
import { refs } from './constants.js';
import iziToast from 'izitoast';
import {
  getFavoritesData,
  removeExerciseFromFavorites,
} from './favoritesStorageHandler.js';
import { resizerHandler } from './favorites.js';

let exercisePopupAddFavoritesBtn = null;
let exercisePopupRemoveFavoritesBtn = null;

export function openExercisePopUp(exerciseID) {
  renderExercisePopUp(exerciseID)
    .then(exercise => {
      exercisePopupAddFavoritesBtn = document.querySelector('#add-favorites');
      refs.exercisePopupAddFavoritesBtn = exercisePopupAddFavoritesBtn;
      exercisePopupRemoveFavoritesBtn =
        document.querySelector('#remove-favorites');
      refs.exercisePopupRemoveFavoritesBtn = exercisePopupRemoveFavoritesBtn;

      if (exercisePopupAddFavoritesBtn) {
        exercisePopupAddFavoritesBtn.dataset.exercise =
          JSON.stringify(exercise);
        exercisePopupAddFavoritesBtn.addEventListener(
          'click',
          handleAddToFavorites,
          { passive: true }
        );
      }

      if (exercisePopupRemoveFavoritesBtn) {
        exercisePopupRemoveFavoritesBtn.dataset.exercise =
          JSON.stringify(exercise);
        exercisePopupRemoveFavoritesBtn.addEventListener(
          'click',
          handleRemoveFromFavorites,
          { passive: true }
        );
      }

      refs.exercisePopUpCloseBtn.addEventListener('click', closeExercisePopUp, {
        passive: true,
      });
      refs.exercisePopUpBackdrop.addEventListener(
        'click',
        handleBackdropClick,
        { passive: true }
      );

      refs.exercisePopUpBackdrop.classList.add('is-open');
      refs.body.classList.add('overflow-hidden');

      document.addEventListener('keydown', handleESCClick);
    })
    .catch(error => {
      iziToast.error({ message: `${error}` });
    });
}

function closeExercisePopUp() {
  refs.exercisePopUpBackdrop.classList.remove('is-open');
  refs.body.classList.remove('overflow-hidden');

  if (exercisePopupAddFavoritesBtn) {
    exercisePopupAddFavoritesBtn.removeEventListener(
      'click',
      handleAddToFavorites
    );
  }

  if (exercisePopupRemoveFavoritesBtn) {
    exercisePopupRemoveFavoritesBtn.removeEventListener(
      'click',
      handleRemoveFromFavorites
    );
  }

  refs.exercisePopUpBackdrop.removeEventListener('click', handleBackdropClick);
  refs.exercisePopUpCloseBtn.removeEventListener('click', closeExercisePopUp);
  document.removeEventListener('keydown', handleESCClick);

  exercisePopupAddFavoritesBtn = null;
  exercisePopupRemoveFavoritesBtn = null;
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
  let favorites = getFavoritesData();
  if (favorites.some(fav => fav._id === exercise._id)) {
    return;
  } else {
    favorites.push(exercise);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    if (window.location.pathname.includes('favorites.html')) {
      resizerHandler(favorites);
    }
    iziToast.success({ message: 'Exercise added to favorites!' });
  }
}

function handleAddToFavorites(event) {
  const exercise = JSON.parse(exercisePopupAddFavoritesBtn.dataset.exercise);
  addExerciseToFavorites(exercise);
  event.stopPropagation();
  refs.exercisePopupAddFavoritesBtn.classList.add('visually-hidden');
  refs.exercisePopupRemoveFavoritesBtn.classList.remove('visually-hidden');
}

function handleRemoveFromFavorites(event) {
  const exercise = JSON.parse(exercisePopupRemoveFavoritesBtn.dataset.exercise);
  const isRemoved = removeExerciseFromFavorites(exercise._id);
  if (isRemoved && window.location.pathname.includes('favorites.html')) {
    resizerHandler(getFavoritesData(), true);
  }
  refs.exercisePopupAddFavoritesBtn.classList.remove('visually-hidden');
  refs.exercisePopupRemoveFavoritesBtn.classList.add('visually-hidden');
  event.stopPropagation();
}

export function handleESCClick(e) {
  if (e.code === 'Escape') {
    closeExercisePopUp();
  }
}
