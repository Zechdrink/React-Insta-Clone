import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';
import authenticate from './components/Authentication/authenticate.js';
import Login from './components/LogIn/Login';




class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  
  render() {
    return (
      <div className="App">
        <PostsPage/>
      </div>
    );
  }
}


export default authenticate(App)(Login);
