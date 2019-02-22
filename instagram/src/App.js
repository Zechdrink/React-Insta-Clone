import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';
import authenticate from './components/Authentication/authenticate.js';
import Login from './components/LogIn/Login';
import styled from 'styled-components';

const AppContainer = styled.div`
text-align: center;
box-sizing: border-box;
width: 640px;
margin: 0 auto;
margin-top: 15px;
box-shadow: 10px 0 105px rgb(43, 41, 41), -10px 0 105px rgb(43, 41, 41);
`;


class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  
  render() {
    return (
      <AppContainer>
        <Switcharoo/>
      </AppContainer>
    );
  }
}

const Switcharoo = authenticate(PostsPage)(Login)


export default App;
