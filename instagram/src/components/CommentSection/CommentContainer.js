import React from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment.js';
import CommentInput from './CommentInput.js'

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

    trollAlert = event => {
        return alert("Anddddd you still don't.")
    }

    addComment = event => {
        event.preventDefault();
        const comment = { text: this.state.newComment, username: localStorage.getItem('user') };
        const comments = this.state.comments;
        if(this.state.newComment === ""){
            return alert("You forgot to leave a comment Silly!")
        } else {
        this.setState({
            comments: [...comments, comment],
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
            newComment = {this.state.newComment}
            />
        </div>
    )
    };
}   



// CommentContainer.propTypes = {
//     comments: PropTypes.arrayOf(
//         PropTypes.shape({ username: PropTypes.string, text: PropTypes.string})
//     )
// };

export default CommentContainer;