import React ,{useContext, useState,useEffect} from 'react'
import  { AppContext } from "./PostProvider";

const MyArticle = () => {

const [mySelectedPost,setMySelectedPost] = useContext<any>(AppContext );
const [title, setTitle] = useState<string>("");
const [description, setDescription] = useState("");
const [content, setContent] = useState("");
const [art_n, setArt_n] = useState("");
// const [front_image1, setFront_image1] = useState<any>("no image");
// const [int_image1, setInt_image1] = useState<any>("no image");

const [img1, setImg1] = useState<any>("");
const [img2, setImg2] = useState<any>("");

const getData = () => {
  console.log("seteando imagenes en el eefect");
  setTitle(mySelectedPost[0].title);
  setDescription(mySelectedPost[0].description);
  setContent(mySelectedPost[0].content);
  setArt_n(mySelectedPost[0].art_n);

  if (
    mySelectedPost[0].front_image &&
    mySelectedPost[0].int_image
  ) {
    
    setImg1(
      "../../../images/" + mySelectedPost[0].front_image[0].filename
    );
    setImg2(
      "../../images/" + mySelectedPost[0].int_image[0].filename
    );

    
  } else console.log("not images yet");

  console.log(mySelectedPost);
  console.log(img1, img2);
};
useEffect(() => {
  getData();
}, [mySelectedPost]);
  
    
    
  
    
   
   
    
     console.log(mySelectedPost);
  


    return (
        <div>
            <h2>My Selected Article</h2>
              <h2>Title:{title}</h2>

               <p>
        Description: {description} <br />
        Content: {content} <br />
        Number of article: {art_n} <br />
      </p>
      { console.log(img1)}
      {console.log(img2)}


           

     
      <img className="prevImage" src={img1} alt="" />
      <img className="prevImage" src={img2} alt="" /> 
    </div>
        
    )
}

export default MyArticle
