import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 90%;
    padding: 15px 0;
    margin-top: 10px;
    padding-left: 20px;
    font-size: 16px;
    border: none;
    border-top: 1px solid rgb(194, 189, 189);
    border-bottom: 1px solid rgb(194, 189, 189);
`;


const CommentInput = props => {
    return (
        <div>
            <form onSubmit ={props.addComment}>
                <Input
                name = "newComment"
                value  = {props.newComment}
                type = "text"
                placeholder = "say something nice..."
                onChange = {props.handleChanges}
                />
            </form>
        </div>
    )
}

export default CommentInput;