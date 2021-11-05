import React, { useEffect, useState,useContext, Fragment } from "react";
import axios, { AxiosResponse } from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import HomeArticle, { AppContext } from "./HomeSixArticles/HomeArticle";
// import "../../styles/lastSixArticles.css";
// import "../../styles/sideArticles.css";
import Loading from "../loading/Loading";
import EmptyPost from "../EmptyPost/EmptyPost";



const LastSixArticles = () => {
 
 
    return (<Fragment>

      <HomeArticle/>
     
       {/* <div className="lastSixArticlesContainer">

        <HomeArticle index="0" />
        <div className=" middleLIne" />

        <div className="sideArticlesContainer">
          <HomeArticle index="1" />
         <HomeArticle index="2" />
          <HomeArticle index="3" />
          <HomeArticle index="4" />
          <HomeArticle index="5" />
        </div> */}
      {/* </div> */}
    </Fragment>
     
    );
  
};

export default LastSixArticles;
