import React, { Fragment, useState, createContext, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext([{}]);


 



const SearchProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [title,setTitle ]=useState (localStorage.getItem("title"));
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [postProv, setPostProv]= useState([])
  
  
  
  

  useEffect(() => {

const get = async () => {
    // console.log('dalee')

   
            try {
      const res = await axios.get(
        `http://localhost:4000/api/posts/byTitle/${title}`
      );
      console.log('buscandoesde searchProvider')
      setPosts(res.data);
      
      

      setMessage(res.data.message);
      console.log(res.data.message);
      
      
     
    } catch (error) {
      console.log(error);
    }
        
    
  };

     
     get()
     setPostProv(posts)
     
  }, [postProv,title]);

 

 
// get();

  

  return (
    <Fragment>
      <SearchContext.Provider value={[posts, setPosts, message,setMessage]}>
        {props.children}
      </SearchContext.Provider>
   
    </Fragment>
  );
};

export default SearchProvider;
