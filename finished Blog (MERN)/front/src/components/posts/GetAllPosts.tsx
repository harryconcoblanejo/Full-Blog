import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "../../styles/myArticle.css";

interface IPosts {
  _id: string;
  title: string;
  description: string;
  content: string;
  art_n: string;
  uploadedImages: [];
  front_image: [{ filename: string }];
  int_image: [{ filename: string }];
  created_by: string;
}

const GetAllPosts = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [postId, setPostId] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("my token");
  let [cont, setCont] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:4000/api/posts");
        setPosts(res.data.posts);

        setMessage(res.data.message);
      } catch (error) {
        setError(error);
        setMessage(error.response.data.message);
      }
    }
    getData();
  }, [cont]);
  async function deletePost(id: string) {
    const res = await axios.delete("http://localhost:4000/api/posts/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return setCont(cont + 1), console.log("post borrado");
  }

  function passId(id: string) {
    localStorage.setItem("postId", id);
    console.log("pasando id desde getAllPosts");
  }
  if (posts.length === 0) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        {/* <h1>this are all posts...{message}</h1> */}

        <ul>
          {posts.map((post) => (
            <div key={post._id} className="myArticle">
              <li>
                <NavLink to="/oneOfAllPosts" className="postTitle">
                  <div onClick={() => passId(post._id)}>
                    <h2 className="allPostsTitle">{post.title}</h2>
                  </div>
                </NavLink>

                <p className="allPostsDescription">
                   {post.description} <br />
                  </p>

                  <p>
                  Number of article: {post.art_n} <br />
                  {/* Post Id: {post._id} */}
                  <br />
                  </p>

                  <img
                    className="prevImage"
                    src={"../../../images/" + post.front_image[0].filename}
                    alt=""
                  />
                  <img
                    className="prevImage"
                    src={"../../images/" + post.int_image[0].filename}
                    alt=""
                  />



              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
};

export default GetAllPosts;
