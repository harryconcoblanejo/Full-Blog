import { type } from 'os'
import React from 'react'
import Posts from './posts/Posts'
import UserForm from './users/UserForm'



const Login = () => {

    const userId = localStorage.getItem("userId")

    if(userId){
        return(
            <div>
                <h2>Already logged!</h2>
             
            </div>
            )
    }else{
        return (
        <div>
            
            <UserForm title="Probando props" buttonText="Login!"  />
            
        </div>
    )
    }
    
}

export default Login
