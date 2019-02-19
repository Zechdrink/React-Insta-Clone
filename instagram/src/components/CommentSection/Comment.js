import React from 'react';

const Comment = props => {
    return (
        <div className = "comments-wrapper">
          <span className = "users"><strong>{props.comment.username}</strong></span>
          <span className = "comments">{": "}{props.comment.text}</span>
        </div>
    
    
    )
}

export default Comment;