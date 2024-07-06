import {
  BASE_URL,
  queryParamsFilters,
  queryParamsExercises,
} from './constants';

const requestOptionsGET = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

// Exercises

export async function serviceGetExercises() {
  const res = await fetch(
    `${BASE_URL}exercises?${queryParamsExercises}`,
    requestOptionsGET
  );
  if (!res.ok) {
    throw new Error(`Ooops, status code: ${res.status}`);
  }
  return await res.json();
}

// NOTE: in case the mail has already did a review it can not be reused
// you will get error message in response in format: {message: "Such email already exists"}
// it should be handled in the catch() with toast message
export async function servicePatchExercisesByIdRating(
  id,
  { rate, email, review }
) {
  const requestOptionsPatch = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rate, email, review }),
  };

  const res = await fetch(
    `${BASE_URL}exercises/${id}/rating`,
    requestOptionsPatch
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to set a rating');
  }
  return data;
}

export async function serviceGetExercisesById(id) {
  const res = await fetch(`${BASE_URL}exercises/${id}`, requestOptionsGET);
  if (!res.ok) {
    throw new Error(`Ooops, status code: ${res.status}`);
  }
  return await res.json();
}

// Filters

export async function serviceGetFilters() {
  const res = await fetch(
    `${BASE_URL}filters?${queryParamsFilters}`,
    requestOptionsGET
  );
  if (!res.ok) {
    throw new Error(`Ooops, status code: ${res.status}`);
  }
  return await res.json();
}

// Quotes
export async function serviceGetQuote() {
  const res = await fetch(`${BASE_URL}quote`, requestOptionsGET);
  if (!res.ok) {
    throw new Error(`Ooops, status code: ${res.status}`);
  }
  return await res.json();
}

// Subscriptions
export async function servicePostSubscription(email) {
  const requestOptionsPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  };

  const res = await fetch(`${BASE_URL}subscription`, requestOptionsPost);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to subscribe');
  }
  return data;
}
