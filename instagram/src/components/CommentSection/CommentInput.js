import React from 'react';

const CommentInput = props => {
    return (
        <div>
            <form onSubmit ={props.addComment}>
                <input
                name = "newComment"
                value  = {props.newComment}
                type = "text"
                placeholder = "say something nice..."
                onChange = {props.handleChanges}
                className = "comment-input"
                />
            </form>
        </div>
    )
}

export default CommentInput;