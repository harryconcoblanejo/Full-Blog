import React, {
  useEffect,
  useState,
  createContext,
  ContextType,
  useContext,
} from "react";
import axios, { AxiosResponse } from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "../../styles/getMyPosts.css"


interface IPosts {
  _id: string;
  title: string;
  description: string;
  content: string;
  art_n: number;
  created_by: string;
  front_image: [{ filename: string }];
  int_image:[{ filename: string }];
  
}

const GetMyPosts = () => {
 

  const [posts, setPosts] = useState<IPosts[]>([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("my token");
  const userId = localStorage.getItem("userId");
  let [cont, setCont] = useState(0);
  // ejecutar el efecto cada vez q se ejecuta deletePost

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/posts/myPosts/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })

      .then(
        (res: AxiosResponse) => {
          setIsLoaded(true);
          setPosts(res.data.posts);
console.log(res)
          setMessage(res.data.message);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          // setMessage(error.response.data.message);
        }
      );
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
    console.log("lalalalala desde passing id");
  }

  if (error) {
    return (
      <div>
        <h2>error: {message}</h2>
      </div>
    );
  } else if (userId === null) {
    return <h2> please login to see your posts {console.log("user null")} </h2>;
  } else if (!isLoaded) {

    return <div>Loading..</div>;

    
  } else if (!posts) {
    return (
      <div>
        <h1>{message} </h1>
      </div>
    );
  } else {
    return (
      <div className="getMyPostsContainer">
        <h2 className="myWelcome">Welcome to your posts!</h2>
        
          <ul>
            {posts.map((post) => (
             <div className="getMyPosts"> 

              <li className="article" key={post._id}>
                <NavLink className="myTitleLink" to="/oneOfAllPosts">
                  <div className="myTitleContainer" onClick={() => passId(post._id)}>
                    <h2 className="myTitle">{post.title}</h2>
                  </div>
                </NavLink>

                <p className="getMyPostsText">
                  Description: {post.description} <br />
                  Content: {post.content} <br />
                  



                  
                </p>

                
                   <div className="imagesContainer">
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
                   </div>
                   <div className="postData">
                      Number of article: {post.art_n} <br />
                   Post Id: {post._id}
                   </div>
                  
                 
                  <div className="buttonsContainer">
                    <button className="deleteButton" onClick={() => deletePost(post._id)}> <span className="textButtons">delete </span> </button>

                <NavLink to="/updateConData">
                  <button className="updateButton" onClick={() => passId(post._id)}> <span className="textButtons">update</span> </button>
                </NavLink>
                  </div>
                
              </li>

              </div>
            ))}
            
          </ul>
        

        
      </div>
    );
  }
};

export default GetMyPosts;
