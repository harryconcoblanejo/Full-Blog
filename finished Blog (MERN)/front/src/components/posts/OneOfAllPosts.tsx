import React,{useEffect, useState} from 'react';
import "../../styles/myArticle.css"
 import GetProvider from "../../providers/GetProvider"
import SelectedArticle from './selectedArticle/SelectedArticle';
import Subscribe from '../subscribe/Subscribe';


const OneOfAllPosts = () => {
 

    return (
        <div>
            <GetProvider>
              <SelectedArticle/>
              <Subscribe/>
            </GetProvider>
        </div>
    )
}

export default OneOfAllPosts
