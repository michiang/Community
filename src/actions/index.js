//All the actions that are to be dispatched by action creator

let nextReviewId = 0;

export const addReview = (text) => dispatch => ({
  type: ADD_REVIEW,
  id: nextReviewId++,
  text
});



