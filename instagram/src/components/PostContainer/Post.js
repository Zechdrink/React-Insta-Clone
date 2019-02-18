import React from 'react';

import PostHeader from './PostHeader.js';

const Post = props => {
    return (
        <div key = {props.post.id}>
        <PostHeader post = {props.post}/>

        <img src = {props.post.imageUrl} alt = {props.post.username}/>
        
        </div>
    )
}

export default Post;