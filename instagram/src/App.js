import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js'



class App extends Component {
  constructor(){
    super();
    this.state = {
      postData: dummyData
    }

  }

  render() {
    return (
      <div className="App">
        <PostContainer postData = {this.state.postData}/>
      </div>
    );
  }
}

export default App;