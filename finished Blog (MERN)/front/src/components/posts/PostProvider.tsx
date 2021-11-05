import React, { createContext, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import FormUpdate from "./FormUpdate";

interface IPosts {
  _id: string;
  title: string;
  description: string;
  content: string;
  art_n: number;
  front_image:{},
  int_image:{},
  created_by: string;
}

export const AppContext = createContext([{}]);

export const PostProvider = (props: any) => {
  const [PostId, setPostId] = useState(localStorage.getItem("postId"));

  const [mySelectedPostToUpdate, setMySelectedPostToUpdate] = useState([{}]);
  const [postProv,setPostProv] = useState([{}]);
  const [mySelectedPost, setMySelectedPost] = useState([{}]);
 

  const token = localStorage.getItem("my token");
  const userId = localStorage.getItem("userId");

 

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/posts/myPosts/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        const mySelectedPost = res.data.posts.filter(
          (post: any) => post._id == PostId
        );

        console.log("ejecutando postProvider");
        setMySelectedPostToUpdate(mySelectedPost);
        setMySelectedPost(mySelectedPost);
       

        
        
       
      } catch (error) {
        console.log(error);
      }
    };
   
    
    getMyPosts();
   
    setPostProv(mySelectedPostToUpdate)
  }, [postProv]);

  return (
    <div>
      <AppContext.Provider
        value={[mySelectedPostToUpdate, setMySelectedPostToUpdate, mySelectedPost]}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default PostProvider;
