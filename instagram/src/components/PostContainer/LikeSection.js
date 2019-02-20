import React from 'react';

const LikeSection = props => {
    return (
        <div className = "likesection-wrapper">
            <div className = "like-icons">
                <i onClick = {props.incrementLikes} className="far fa-heart fa-lg" />
                <i className="far fa-comment fa-flip-horizontal fa-lg" /> 
            </div>
            
            <div className = "likes">
                <strong>{props.likes}{' likes'}</strong>
            </div>
        </div>
    )
}

export default LikeSection;