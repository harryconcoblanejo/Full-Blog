import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import GetMyPosts from "./GetMyPosts";
import "../../styles/postsContainer.css";
import Subscribe from "../subscribe/Subscribe";

const Posts = () => {
  return (
    <div className="postsContainer">


      
        <div className="links">
          <NavLink className="allPostsLink" to="/getAllPosts">
            <div className="getAllPostsButton">
            <span className="getAllPostsText" >Get all Posts</span>
            </div>
         </NavLink>
         
            
         


          <NavLink className="newPostLink" to="/newPost">
            <div className="newPostButton">
              <span className="newPostText">New Post</span>
            </div>
            
          </NavLink> 
        </div>
     
        <GetMyPosts />
        <Subscribe/>

        
      
    </div>
  );
};

export default Posts;
