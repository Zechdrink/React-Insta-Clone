import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';




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

export default App;
