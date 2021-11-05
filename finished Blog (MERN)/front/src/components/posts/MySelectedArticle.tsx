import React from 'react'
import PostProvider from "../posts/PostProvider";
import MyArticle from './MyArticle';


const MySelectedArticle = () => {
    return (
        
            <PostProvider>
            <MyArticle/>
            </PostProvider>
        
    )
}

export default MySelectedArticle
