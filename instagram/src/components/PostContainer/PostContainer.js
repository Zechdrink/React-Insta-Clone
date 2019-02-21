import React from 'react';
import Post from './Post.js'


const PostContainer = props => {
    return (
        <div>
            {props.postData.map((post, index) => { 
                return (
                    <div key = {index}>
                        <Post post = {post}/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer;