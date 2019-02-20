import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import CommentInput from './CommentInput.js'
import './comment.css';

class CommentContainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            comments: props.comments,
            newComment: ''
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addComment = event => {
        event.preventDefault();
        const comment = { text: this.state.newComment, username: 'Chris Pratt' };
        const comments = this.state.comments.slice();
        if(this.state.newComment === ""){
            return alert("You forgot to leave a comment Silly!")
        } else {
        comments.push(comment);
        this.setState({
            comments: comments,
            newComment: ""
        });
      }
    }

    render(){ 
        return (
        <div>
            {this.state.comments.map((comment, index)=> <Comment key = {index} comment = {comment}/>
            )}

            <CommentInput 
            handleChanges = {this.handleChanges}
            addComment = {this.addComment}
            />
        </div>
    )
    };
}   



CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ username: PropTypes.string, text: PropTypes.string})
    )
};

export default CommentContainer;