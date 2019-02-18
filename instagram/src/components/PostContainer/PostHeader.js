import React from 'react';

const PostHeader = props => {

    return (
        <div className = "header-post">
            <img className = "thumbnails" src = {props.post.thumbnailUrl} alt = "thumbnail"/>
            <h3> {props.post.username} </h3>
        </div>
    )


}

export default PostHeader;