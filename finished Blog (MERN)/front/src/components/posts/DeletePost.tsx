import React, { useEffect, useState,createContext, ContextType  } from "react";


import axios from "axios";
import GetMyPosts from "./GetMyPosts";
const token = localStorage.getItem("my token");



interface IPosts {
  _id: string;
  title: string;
  description: string;
  content: string;
  art_n: number;
  uploadedImages: [];
  front_image: {};
  int_image: {};
  created_by: string;
}

const DeletePost = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  

  return (
    <div>
      <h1>Deleting...</h1>
     {console.log('el post q vas a borrar es el n°')}

    </div>
  );
};

export default DeletePost;
