import React from 'react';

const CommentButton = (props) => {
  return (
    <div>
    <button type = 'submit' onClick ={() => store.dispatch(addReview('review')) }
    </div>
  )
}

module.exports = CommentButton;