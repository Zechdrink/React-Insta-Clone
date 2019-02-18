import React from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment.js'

const CommentContainer = props => {
    return (
        <div>
            {props.comments.map((comment)=>{ 
                return <Comment comment = {comment}/>
            })}
        </div>
    )
}   

export default CommentContainer;