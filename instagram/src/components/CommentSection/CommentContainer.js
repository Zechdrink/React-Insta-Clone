import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import './comment.css';

class CommentContainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render(){ 
        return (
        <div>
            {this.state.comments.map((comment, index)=>{ 
               return <Comment key = {index} comment = {comment}/>
            })}
        </div>
    )
    }
}   

CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ username: PropTypes.string, text: PropTypes.string})
    )
}

export default CommentContainer;