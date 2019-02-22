import React from 'react';
import dummyData from '../../dummy-data.js';
import PostContainer from './PostContainer.js'
import SearchBar from '../SearchBar/SearchBar.js';


class PostsPage extends React.Component {
    constructor(){
        super();
            this.state = {
                postData:[]
              };   
    }

    componentDidMount(){
        this.setState({ postData: dummyData })
      }

    render(){
        return (
            <div className="App">
              <SearchBar postData = {this.state.postData}/>
              <PostContainer postData = {this.state.postData}/>
            </div>
          );
    }

}

export default PostsPage;