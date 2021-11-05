import axios from "axios";
import { useState, useEffect, createContext } from "react";
import React from "react";
interface IPosts {
  _id: string;
  title: string;
  description: string;
  content: string;
  art_n: number;
  front_image: { filename: string };
  int_image: { filename: string };
  created_by: string;
}


export const AppContext = createContext([{}]);

export const GetProvider = (props: any) => {
  const [mySelectedPostToShow, setMySelectedPostToShow] = useState([{}]);
  const [postProv,setPostProv] = useState([{}]);

  useEffect(() => {

    const postId = localStorage.getItem("postId");
    const get = async () => {
      try {
        

        const res = await axios.get(
          `http://localhost:4000/api/posts/${postId}`
        );
        // const mySelectedPost = res.data.filter(
        //   (post: any) => post._id == postId
        // );

        console.log(res)
        const mySelectedPost = res.data
        setMySelectedPostToShow(res.data);
        
        console.log(mySelectedPost)
       
        
      } catch (error) {
        console.log(error);
      }
    };
    get()
    setPostProv(mySelectedPostToShow)
   
  }, [postProv]);

  return (
    <div>
      <AppContext.Provider
        value={[mySelectedPostToShow,setMySelectedPostToShow]}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );

};

// const Get = () => {
//   const [data, setData] = useState<IPosts>();

//   const [title, setTitle] = useState<string>("");
//   const [description, setDescription] = useState("");
//   const [content, setContent] = useState("");
//   const [art_n, setArt_n] = useState("");
//   const [img1, setImg1] = useState<any>("");
//   const [img2, setImg2] = useState<any>("");

//   useEffect(() => {

//     async function getPosts() {
//       const res = await axios.
//       get(`http://localhost:4000/api/posts/${postId}`);

//       setData(res.data);

//       if(data){
//         setTitle(res.data.title);
//       setDescription(res.data.description);
//       setContent(res.data.content);
//       setArt_n(res.data.art_n);

//        setImg1("../../../images/" + res.data.front_image.filename);
//         setImg1("../../../images/" + res.data.int_image.filename);
//       }else{
//         console.log('loading images from get component')
//       }
//     }

//     getPosts();

//   }, [data]);

//   if (!data) {
//     return <h2>loading..</h2>;
//   }
//   else {
//     return (
//       <div>
//         <h2>este es el titulo del post.....{data.title} <br/>
//         {data.content} <br/>
//         {data.description} <br/>
//         {data.art_n} <br/>
//         {img1}

//         </h2>
//       {console.log('test') }
//       </div>
//     );
//   }
// };

export default GetProvider;
