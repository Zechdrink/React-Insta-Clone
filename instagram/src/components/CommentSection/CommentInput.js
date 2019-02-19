import React from 'react';

const CommentInput = props => {
    return (
        <div>
            <form>
                <input
                className = "comment-input"
                type = "text"
                placeholder = "say something nice..."
                />
            </form>
        </div>
    )
}

export default CommentInput;