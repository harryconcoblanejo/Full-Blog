import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../loading/Loading";

import { SearchContext } from "../searchProvider/SearchProvider";
import "./mySearch.css";

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

const MySearch = () => {
  const [posts, setPosts, message, setMessage] = useContext<any[]>(
    SearchContext
  );

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState("");
  const [postsFound, setPostsFound] = useState<IPosts[]>([]);
  const length = posts.length;
  //  const [load, setLoad] = useState(false);

  const getData = () => {
    console.log("hello from my search and geting data");

    if (length == 0) {
      console.log("not posts yet");
    } else {
      // console.log(posts);
      // setTitle(posts.posts.title);
      // setDescription(posts.posts.description);
      setPostsFound(posts.posts);

      //  setLoad(true);
    }
  };

  useEffect(() => {
    getData();
  }, [posts]);

  function passId(id: string) {
    localStorage.setItem("postId", id);
    console.log("pasando id desde MySearch");
  }

  if (postsFound.length == 0) {
    return (
      <div className="messageBox">
        {/* <h2 className="message">THERE ARE NO PUBLICATIONS WITH THE TITLE:"{localStorage.getItem('title')}"</h2> */}
    <h2 className="message">
      {message}
      </h2> 
      </div>
    );
  }

  //  if ( empty ==0) {

  //     return <h2>Loading...</h2>
  //   }
  else
    return (
      <div className="matchTitles">
        <ul className="ulTitlesFound">
          {postsFound.map((post: IPosts) => (
            <div className="titlesList" key={post._id}>
              <li>
                <NavLink to="/oneOfAllPosts">
                  <div className="titleFoundontainer" onClick={() => passId(post._id)}>
                    <h2 className="titleFound">{post.title}</h2>
                  </div>
                </NavLink>

                <p>
                  {post.description} <br />
                  Number of article: {post.art_n} <br />
                  Post Id: {post._id}
                  <br />
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
                </p>
              </li>
              <div className=" middleLIne" />
            </div>
          ))}
        </ul>
      </div>
    );
};

export default MySearch;
