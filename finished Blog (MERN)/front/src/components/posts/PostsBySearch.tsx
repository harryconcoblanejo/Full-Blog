import React, { useContext, useEffect, useState } from "react";
import Loading from "../loading/Loading";
import MySearch from "../search/mySearch/MySearch";
import SearchProvider, { SearchContext } from "../search/searchProvider/SearchProvider";


const PostsBySearch = () => {

  const [posts, setPosts, message,setMessage] = useContext<any []>(SearchContext);

  if(posts.length===0){
    
   return(
     <div >
       
     <h2>Loading...</h2>
     </div>
    
   ) 
  }else
  return (
    <SearchProvider>
      <MySearch />
    </SearchProvider>
    
  );
};

export default PostsBySearch;
