import React, { useContext, useState, useEffect, Fragment } from "react";
import { AppContext } from "../../../providers/GetProvider";

import "./selectedArticle.css";

const SelectedArticle = () => {
  const [mySelectedPostToShow, setMySelectedPostToShow] = useContext<any>(
    AppContext
  );
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [art_n, setArt_n] = useState("");
  const [img1, setImg1] = useState<any>("");
  const [img2, setImg2] = useState<any>("");

  const getData = () => {
    console.log("seteando data en selected article");
    setTitle(mySelectedPostToShow.title);
    setDescription(mySelectedPostToShow.description);
    setContent(mySelectedPostToShow.content);
    setArt_n(mySelectedPostToShow.art_n);

    if (mySelectedPostToShow.front_image && mySelectedPostToShow.int_image) {
      setImg1(
        "../../../images/" + mySelectedPostToShow.front_image[0].filename
      );
      setImg2("../../images/" + mySelectedPostToShow.int_image[0].filename);
    } else {
      console.log("not images yet");
    }
  };

  useEffect(() => {
    getData();
    console.log("este es el post" + mySelectedPostToShow);
  }, [mySelectedPostToShow, img1, img2]);

  return (
    
       <div className="selectedArticleContainer">
      <img className="selectedImage" src={img2} alt="" />

      

        <h2 className="selectedTitle">{title}</h2>

        <p className="selectedDescription">
           Description: {description} <br />
        </p>
       <p className="selectedContent">
         Content: {content} <br />
       </p>
        
        Number of article: {art_n} <br />

      

      {/* <img className="prevImage" src={img1} alt="" /> */}
    </div>
    
   
   
  );
};

export default SelectedArticle;
