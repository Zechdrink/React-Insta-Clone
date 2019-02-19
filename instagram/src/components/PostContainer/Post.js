import React from 'react';

import PostHeader from './PostHeader.js';
import CommentContainer from '../CommentSection/CommentContainer.js';
import CommentInput from '../CommentSection/CommentInput.js';
import LikeSection from './LikeSection.js'

const Post = props => {
    return (
        <div className = "border-wrapper">

            <PostHeader post = {props.post}/>

            <img src = {props.post.imageUrl} alt = {props.post.username}/>
            <LikeSection post = {props.post}/>
            <CommentContainer comments = {props.post.comments}/>
            <CommentInput/>

        </div>
    )
}

export default Post;