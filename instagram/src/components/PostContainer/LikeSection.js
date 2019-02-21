import React from 'react';
import styled from "styled-components";

const LikeSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 5px 25px;
`;

const Icons = styled.i`
    padding: 10px 10px 7px 0;

   &:hover {
       color: red;
   }

`;

const LikeSection = props => {
    return (
        <LikeSectionWrapper>
            <div className = "like-icons">
                <Icons onClick = {props.incrementLikes} className="far fa-heart fa-lg" />
                <Icons className="far fa-comment fa-flip-horizontal fa-lg" /> 
            </div>
            
            <div className = "likes">
                <strong>{props.likes}{' likes'}</strong>
            </div>
        </LikeSectionWrapper>
    )
}

export default LikeSection;