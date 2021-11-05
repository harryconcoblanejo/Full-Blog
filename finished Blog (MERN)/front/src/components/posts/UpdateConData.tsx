import React from "react";
import PostProvider, { AppContext } from "./PostProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import FormUpdate from "./FormUpdate";

const UpdateConData = () => {
   
  return (
    <div>
     
      <PostProvider>
      <FormUpdate />
      </PostProvider>
      
         
      
        
      
    
      

    </div>
  );
};

export default UpdateConData;
