import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className = "comments-wrapper">
          <span className = "users"><strong>{props.comment.username}</strong></span>
          <span className = "comments">{": "}{props.comment.text}</span>
        </div>
    
    
    )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;