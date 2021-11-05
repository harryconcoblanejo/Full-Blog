import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../styles/userForm.css";
import axios, { AxiosResponse } from "axios";


type FormData = {
  _id: string;
  email: string;
  password: string;
  name: string;
  admin:boolean
};

const NewUser = () => {
  const { register, errors, handleSubmit } = useForm<FormData>();
  const [user, setUser] = useState<FormData[]>([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: FormData, e: any) => {
    setUser([data]);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/signup",
        data
      );
      setMessage(res.data.message);

      setError(false);
      setIsLoaded(true);
      console.log(res.data);
    } catch (error) {
      setError(true);
      setErrorMessage(error.response.data.message);

      

      console.log("el error es: " + errorMessage);
    }
  };

  // const onLogin = () => {
  //   console.log("check auth...");
  // };

  return (
   
     <Fragment>

     
        
        
          <form onSubmit={handleSubmit(onSubmit)} className="newUserForm">
          <span className="userTitle">Create a New User</span>
            <input
              type="text"
              name="email"
              placeholder="Email adress"
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="field"
            />
            {errors.email && <span> {errors.email.message}</span>}

            <input
              type="text"
              name="password"
              placeholder="Password"
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="field"
            />
            {errors.password && <span> {errors.password.message}</span>}

            <input
              type="text"
              name="name"
              placeholder="User Name"
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="field"
            />
            {errors.name && <span> {errors.name.message}</span>}



            <input
              type="text"
              name="admin"
              placeholder="is admin?...true/false"
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="field"
            />
            {errors.email && <span> {errors.email.message}</span>} 

            <button type="submit" className="newUserButton">
              Create New User
            </button>
           
          </form>
        

        {/* renderizado condicional */}

        {!isLoaded ? (
          <h2>{errorMessage}</h2>
        ) : (
          <ul>
            {user.map((user) => (
              <li key={user.name}>
                <h2>{message}</h2>
                <p>
                 User {user.name} created! <br />
                
                </p>
              </li>
            ))}
          </ul>
        )}
     </Fragment> 
    
  );
};

export default NewUser;
