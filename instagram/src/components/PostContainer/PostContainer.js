import React from 'react';

import Post from './Post.js'
import "./postcontainer.css";

const PostContainer = props => {
    return (
        <div>
            {props.postData.map((post) => { 
                return (
                    <div>
                        <Post post = {post}/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer;