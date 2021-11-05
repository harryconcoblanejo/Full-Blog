import React, { Fragment, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
  RouteProps,
  RouteComponentProps,
  RouteChildrenProps,
} from "react-router-dom";

import LastSixArticles from "./LastSixArticles";

import "../../styles/home.css";
import Footer from "../footer/Footer";
import SubscriptionPage from "../subscriptionPage/SubscriptionPage";
import Subscribe from "../subscribe/Subscribe";
import EmptyPost from "../EmptyPost/EmptyPost";

const Home = () => {
 
 
    return (
     
        
        <div className="homeContainer">
          
        <LastSixArticles /> 
        
        <Subscribe/>

        </div>
      
       
      
    );
  
};

export default Home;
