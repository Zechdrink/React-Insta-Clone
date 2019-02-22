import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const CommentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3px 25px;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
`;

const UsernameSpan = styled.span`
    padding-right: 5px;
`;

const Comment = props => {
    return (
        <CommentWrapper>
          <UsernameSpan className = "users"><strong>{props.comment.username}:</strong></UsernameSpan>
          <span className = "comments">{props.comment.text}</span>
        </CommentWrapper>
    
    
    )
}

// Comment.propTypes = {
//   comment: PropTypes.shape({
//     username: PropTypes.string,
//     text: PropTypes.string
//   })
// };

export default Comment;