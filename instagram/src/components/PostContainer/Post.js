import React from 'react';

import PostHeader from './PostHeader.js';
import CommentContainer from '../CommentSection/CommentContainer.js';
import CommentInput from '../CommentSection/CommentInput.js';

const Post = props => {
    return (
        <div className = "border-wrapper">

            <PostHeader post = {props.post}/>

            <img src = {props.post.imageUrl} alt = {props.post.username}/>
        
            <CommentContainer comments = {props.post.comments}/>
            <CommentInput/>

        </div>
    )
}

export default Post;