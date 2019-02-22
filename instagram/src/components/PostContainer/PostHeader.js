import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
    display: flex;
    align-items: center;

    & img {
        border-radius: 50px;
        height: 30px;
        width: 30px;
        padding: 20px;
    }
}
`;


const PostHeader = props => {

    return (
        <PostWrapper>
            <img src = {props.post.thumbnailUrl} alt = "thumbnail"/>
            <h3> {props.post.username} </h3>
        </PostWrapper>
    )


}

export default PostHeader;