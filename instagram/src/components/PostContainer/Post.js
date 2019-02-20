import React from 'react';
import PostHeader from './PostHeader.js';
import CommentContainer from '../CommentSection/CommentContainer.js';
import LikeSection from './LikeSection.js';




class Post extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           likes: props.post.likes  
       }
   }
   
   incrementLikes = () => {
       let likes = this.state.likes + 1;
       this.setState({likes});     
    }
   
   
   render(){
    return (
        <div className = "border-wrapper">

            <PostHeader post = {this.props.post}/>
            <img src = {this.props.post.imageUrl} alt = {this.props.post.username}/>
            <LikeSection incrementLikes = {this.incrementLikes} likes  = {this.state.likes}/>
            <CommentContainer comments = {this.props.post.comments}/>

        </div>
    )
   }
}

export default Post;