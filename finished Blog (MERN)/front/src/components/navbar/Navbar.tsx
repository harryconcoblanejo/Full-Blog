import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Searcher from "../search/Searcher";

import "../../styles/nav.css";

type Props = {
  title: string;
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
      setNavbar(true);

      console.log(navbar);
    } else {
      setNavbar(false);
      console.log(navbar);
    }
    window.addEventListener("scroll", changeBackground);
  };

  useEffect(() => {
    changeBackground();
  }, [navbar]);

  return (

    <div className="navbar">
      <div className={navbar ? "navContainer hidden" : "navContainer"}>
        <Searcher />

      
           <NavLink className="nav" activeClassName="active" to="/" exact>
            <span> Home</span>
          </NavLink>
           <NavLink className="nav" activeClassName="active" to="/newUser">
            <span>Create a new user</span>
          </NavLink>

          <NavLink className="nav" activeClassName="active" to="/login">
            <span>Login</span>
          </NavLink>

          <NavLink className="nav" activeClassName="active" to="/user">
            <span>User</span>
          </NavLink>

          <NavLink className=" nav" activeClassName="active" to="/posts">
            <span> Posts</span>
          </NavLink> 
        
      </div>

      {/* -------------------------------------------------- */}

       <div className={!navbar ? "navContainer hidden " : "navContainer active"}>
        <Searcher />

        <NavLink
          className={!navbar ? "navRestart " : "navAnim"}
          activeClassName="active"
          to="/"
          exact
        >
          <span> Home</span>
        </NavLink>
        <NavLink
          className={!navbar ? "navRestart " : "navAnim"}
          activeClassName="active"
          to="/newUser"
        >
          <span>Create a new user</span>
        </NavLink>

        <NavLink
          className={!navbar ? "navRestart " : "navAnim"}
          activeClassName="active"
          to="/login"
        >
          <span>Login</span>
        </NavLink>

        <NavLink
          className={!navbar ? "navRestart " : "navAnim"}
          activeClassName="active"
          to="/user"
        >
          <span>User</span>
        </NavLink>
 
        <NavLink
          className={!navbar ? "navRestart " : "navAnim"}
          activeClassName="active"
          to="/posts"
        >
          <span> Posts</span>
        </NavLink> 
      </div> 
    </div>
  );
};

export default Navbar;
