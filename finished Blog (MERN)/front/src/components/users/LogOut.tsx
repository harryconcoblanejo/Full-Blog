import React from 'react'

const LogOut = () => {
    // e.preventDefault()

    const removeUser = () => {
        
        localStorage.removeItem("my token");
        localStorage.setItem("userName",'');
        localStorage.removeItem("userId");

    }
    
    return (
        <div>
            <form onSubmit={removeUser}>
            <button type="submit">Logout!</button>
          </form>
        </div>
    )
}

export default LogOut

