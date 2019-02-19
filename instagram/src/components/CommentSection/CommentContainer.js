import React from 'react';
// import PropTypes from 'prop-types';
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
            {this.state.comments.map((comment)=>{ 
               return <Comment comment = {comment}/>
            })}
        </div>
    )
    }
}   

export default CommentContainer;