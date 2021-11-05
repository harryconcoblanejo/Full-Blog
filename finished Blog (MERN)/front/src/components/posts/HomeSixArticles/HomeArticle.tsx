import React, { useEffect, useState, createContext, Fragment } from "react";
import axios, { AxiosResponse } from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "../../../styles/lastSixArticles.css";
import "../../../styles/sideArticles.css";
import Loading from "../../loading/Loading";

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
export const AppContext = createContext([{}]);

const HomeArticle = (props: any) => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [principalPost, setPrincipalPost] = useState<IPosts[]>([]);
  const [sidePosts, setSidePosts] = useState<IPosts[]>([]);
  // const [index, setIndex] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        console.log("flag1");
        const res = await axios.get("http://localhost:4000/api/posts/lastSix");
        console.log("flag2");
        setMessage(res.data.message);

        console.log(res);
        setPosts(res.data.lasts6);

        setPrincipalPost(res.data.lasts6[0]);
        setSidePosts(res.data.lasts6.splice(1, 5));

        console.log(principalPost);

        console.log(sidePosts);
      } catch (error) {
        // setError(error);
        // setMessage(error.response.data.message);
        // console.log(error);
      }
    }
    getData();
  }, []);

  function passId(id: string) {
    localStorage.setItem("postId", id);
    console.log("pasando id desde getAllPosts");
  }

  // return (
  //   <div className="lastSixArticlesContainer">

  //     {posts.map((post) => (
  //       <div key={post._id}>
  //         <img
  //           className="principalImage"
  //           src={"../../../images/" + posts[0].front_image[0].filename}
  //           alt=""
  //         />
  //         <div className="principalText">
  //           <h2 className="principalTitle">{posts[0].title}</h2>

  //           <p className="principalDescription">
  //             {posts[0].description} <br />
  //             Number of article: {posts[0].art_n} <br />
  //             Post Id: {posts[0]._id}
  //             <br />
  //           </p>
  //         </div>
  //       </div>
  //     ))}
  //     <div className=" middleLIne" />

  //     {/* //////////////////////////////////////// */}

  //     <ul>
  //       {sidePosts.map((post, i) => (
  //         <div key={post._id}>
  //           <li>

  //             <img
  //               className="sideImage"
  //               src={"../../../images/" + sidePosts[i].front_image[0].filename}
  //               alt=""
  //             />

  //             <div className={i == 0 ? "principalText" : "sideText"}>
  //               <h2 className="sideTitle">{sidePosts[i].title}</h2>

  //               <p className="sideDescription">
  //                 {sidePosts[i].description} <br />
  //                 Number of article: {sidePosts[i].art_n} <br />
  //                 Post Id: {sidePosts[i]._id}
  //                 <br />
  //               </p>
  //             </div>
  //           </li>
  //         </div>
  //       ))}
  //     </ul>
  //   </div>
  // );

  ////////////////////////////////////////////////////////7
  if (!posts) {
    return (
      <Fragment>
        <h2>waiting for posts</h2>
        <h2>{message}  bkd msg</h2>
        <div className="principalLoading">
          <Loading />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        
        <div className="lastSixArticlesContainer">
          {posts.map((post, i) => (
            <NavLink
              to="/oneOfAllPosts"
              className={i == 0 ? "principalArticle" : "sideArticles"}
              onClick={() => passId(post._id)}
            >
              <img
                className={i == 0 ? "principalImage" : "sideImage"}
                src={"../../../images/" + post.front_image[0].filename}
                alt=""
              />

              <div className={i == 0 ? "principalText" : "sideText"}>
                <h2 className={i == 0 ? "principalTitle" : "sideTitle"}>
                  {post.title}
                </h2>

                <p
                  className={
                    i == 0 ? "principalDescription" : "sideDescription"
                  }
                >
                  {post.description} <br />
                  Number of article: {post.art_n} <br />
                  Post Id: {post._id}
                  <br />
                </p>
              </div>

              {/* <AppContext.Provider value={[posts, setPosts]}>
          {props.children}
        </AppContext.Provider> */}
            </NavLink>
          ))}
        </div>

        {/* 
     ////////////////////////////// */}
        <div className="sideArticlesContainer">
          {sidePosts.map((post, i) => (
            <NavLink
              to="/oneOfAllPosts"
              className="sideArticles"
              onClick={() => passId(post._id)}
            >
              <img
                className="sideImage"
                src={"../../../images/" + post.front_image[0].filename}
                alt=""
              />

              <div className="sideText">
                <h2 className="sideTitle">{post.title}</h2>

                <p className="sideDescription">
                  {post.description} <br />
                  Number of article: {post.art_n} <br />
                  Post Id: {post._id}
                  <br />
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </Fragment>
    );
  }
};

export default HomeArticle;
function elem(elem: any, index: string) {
  throw new Error("Function not implemented.");
}
