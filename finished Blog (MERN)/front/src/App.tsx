import React, { useEffect, useState } from "react";

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
import Posts from "./components/posts/Posts";
import NewUser from "./components/users/NewUser";
import Home from "./components/posts/Home";

import Login from "./components/Login";
import UserProvider from "./components/users/UserProvider";
import User from "./components/users/User";
import GetAllPosts from "./components/posts/GetAllPosts";
import NewPost from "./components/posts/NewPost";
import DeletePost from "./components/posts/DeletePost";

import UpdateConData from "./components/posts/UpdateConData";
import MySelectedArticle from "./components/posts/MySelectedArticle";
import OneOfAllPosts from "./components/posts/OneOfAllPosts";
import Navbar from "./components/navbar/Navbar";

import PostsBySearch from "./components/posts/PostsBySearch";
import SearchProvider from "./components/search/searchProvider/SearchProvider";
import Footer from "./components/footer/Footer";

import "./styles/appContainer.css";
import "./components/footer/footer.css";
import SubscriptionPage from "./components/subscriptionPage/SubscriptionPage";
import Subscribe from "./components/subscribe/Subscribe";
import UsersList from "./components/users/usersList/UsersList";


function App() {
  return (
    <div className="appContainer">
      <Router>
        <Navbar />
       

        <Switch>
          <UserProvider>
            <Route exact path="/" component={Home} />
            <Route path="/subscriptionPage" component={SubscriptionPage} />
            
            <Route path="/newUser">
              <NewUser />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/posts">
              <Posts />
            </Route>

            <SearchProvider>
              <Route path="/postsBySearch" component={PostsBySearch} />
            </SearchProvider>

            <Route path="/getAllPosts">
              <GetAllPosts />
            </Route>

            <Route path="/newPost" component={NewPost} />
            <Route path="/deletePost" component={DeletePost} />

            <Route path="/updateConData" component={UpdateConData} />

            <Route path="/mySelectedArticle" component={MySelectedArticle} />
            <Route path="/oneOfAllPosts" component={OneOfAllPosts} />
            <Route path="/user">
              <User />
            </Route>
          </UserProvider>
         
        </Switch>
        {/* <Route path="/UsersList" component={UsersList} /> */}
        <Footer />
      </Router>

     
    </div>
  );
}

export default App;
