import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";


import "./subscribe.css";

const Subscribe = () => {
  const history = useHistory();
  // const onSubscribe = () => {
  //   console.log("suscribing...");
  //    history.push("/subscriptionPage");
  // };

  return (
    
        
      <NavLink to="/subscriptionPage" activeClassName="active" className="link">
        <div className="subscribeContainer" >
          <span className="envelope">
            <FaRegEnvelope />
          </span>

          
          <h2 className="subscribeText">Subscribe</h2>
        </div>
      </NavLink>
    
  );
};

export default Subscribe;
