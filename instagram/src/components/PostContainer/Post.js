import React from 'react';
import PostHeader from './PostHeader.js';
import CommentContainer from '../CommentSection/CommentContainer.js';
import LikeSection from './LikeSection.js';
import styled from 'styled-components';


const BorderWrap = styled.div`
    margin-bottom: 15px;
`;

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
        <BorderWrap className = "border-wrapper">

            <PostHeader post = {this.props.post}/>
            <img src = {this.props.post.imageUrl} alt = {this.props.post.username}/>
            <LikeSection incrementLikes = {this.incrementLikes} likes  = {this.state.likes}/>
            <CommentContainer comments = {this.props.post.comments}/>

        </BorderWrap>
    )
   }
}

export default Post;