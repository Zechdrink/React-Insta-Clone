import React from 'react';
import styled from "styled-components"

const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(194, 189, 189);
    padding: 15px;
`;

const RightIcons = styled.div`
    display: flex;
    align-items: center;
    padding-right: 15px;
`;

const RightIconsI = styled.i`
    padding: 0 7px;
`;

const RightHeader = styled.h2`
    padding: 0 7px;
`;

const InputDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    text-align: center;
    padding: 5px;
    border: 2px solid black;
    font-size: 18px;
`;

const LeftIcons = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
`;

const LeftIconsI = styled.i`
    padding: 0 7px;
    border-right: 1px solid gray;
`;



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usernames: props.postData.username,
        };
    }

    signOut = event => {
        event.preventDefault();
        window.localStorage.removeItem('user');
        window.location.reload();
    }


    render(){
    return (
        <SearchWrapper>
            <LeftIcons className = "left-nav">
                <LeftIconsI onClick = {this.signOut} className="fab fa-instagram fa-2x"></LeftIconsI>
                <RightHeader>Instagram</RightHeader>  
            </LeftIcons>

            <InputDiv className = "nav-search">
                <Input type = "text" placeholder = "Search..."/>
            </InputDiv>
           
            <RightIcons>
                <RightIconsI className="far fa-compass fa-2x" /> 
                <RightIconsI className="far fa-heart fa-2x" />
                <RightIconsI className="far fa-user fa-2x" />
            </RightIcons>
        </SearchWrapper>
    )
}
}

export default SearchBar;