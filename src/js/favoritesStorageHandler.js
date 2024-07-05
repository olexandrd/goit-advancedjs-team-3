import iziToast from 'izitoast';

export function removeExerciseFromFavorites(exerciseID) {
  let data = getFavoritesData();
  const exercise = data.find(e => e._id === exerciseID);
  if (!exercise) return;
  const updatedFavorites = data.filter(e => e._id !== exerciseID);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  iziToast.success({
    message: `Exercise ${exercise.name} removed from favorites!`,
  });
}

export function getFavoritesData() {
  // 1. Retrieve the data from localStorage
  const retrievedData = localStorage.getItem('favorites');
  // 2. Convert the retrieved data back to an array
  return JSON.parse(retrievedData) || [];
}