import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserProvider";
import LogOut from "../users/LogOut";
import Posts from "../posts/Posts";
import { NavLink, Router,Route, Switch } from "react-router-dom";
import UsersList from "./usersList/UsersList";

const User = () => {
  // const [ userName ] = useContext(UserContext);
  const userName=localStorage.getItem("userName");
  const[myLoginName,setMyLoginName]=useState('')
  const empty = "";
// useEffect(()=>{
// console.log('loading user...')
// console.log(userName)
// setMyLoginName(userName)
// },[userName,myLoginName])
  return (
    <div>
      <h2>holaaaa</h2>
      {userName != empty ? (
        <div>

         
            
              
           
         
          
          <h2>el usueario es:{userName}</h2>

          <LogOut />
          <Posts/> 

                  
 

          



        </div>
      ) : (
        <h2>NO USER</h2>
      )}
    </div>
  );
};




export default User;
