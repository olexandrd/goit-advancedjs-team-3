import { queryParamsExercises, refs } from './constants';
import { rerenderExercises } from './rerender';
import { onSearchFormSubmit } from './eventHandlers';

refs.searchInputCrossIcon.addEventListener('click', () => {
  queryParamsExercises.set('page', 1);
  queryParamsExercises.delete('keyword');
  refs.searchForm.reset();

  rerenderExercises();
});

refs.searchInputSearchIcon.addEventListener('click', onSearchFormSubmit);
refs.searchForm.addEventListener('submit', onSearchFormSubmit);

export {};
