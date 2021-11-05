import React, { Fragment, useState} from "react";
import { useForm } from "react-hook-form";
import "../../styles/userForm.css";
import axios from "axios";




type FormData = {
  userId: string;
  email: string;
  password: string;
  name: string;
};

interface IProps {

  title: string;
  buttonText: string;
}


const UserForm: React.FC<IProps> = (props) => {
  const { register, errors, handleSubmit } = useForm<FormData>();
  const [user, setUser] = useState<FormData[]>([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [token, setToken] = useState("");
 
  
  const onLogin = async (data: FormData, e: any) => {
    setUser([data]);
   
    console.log("flagggggg0");

    // localStorage.setItem("userName", data.name)

    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        data
      );

      const token = res.data.token;
      localStorage.setItem("my token", token);

      console.log("flagggggg1");
      const res2 = await axios.post(
        "http://localhost:4000/api/users/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      

      

      console.log("este es el usuario logueado   " + res2.config.data);
      console.log(`este es el token ${token}`);
      console.log(res2);

      
      setIsLoaded(false);
      setMessage(res2.data.message);
      setError(false);

      localStorage.setItem("userName", data.name)
      localStorage.setItem("userId", res.data.userId)


      console.log("flagggggg2")
    } catch (error) {
      setError(true);
      setErrorMessage(error.response.data.message);

      console.log("el error es: " + errorMessage);
    }

   
  };
  
  return (
    <Fragment>
      
        
      
          <form onSubmit={handleSubmit(onLogin)} className="loginForm">
          <span className="userTitle">Login</span>
            <input
              type="text"
              name="email"
              placeholder="Ingrese Email"
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="field"
            />
            {errors.email && <span> {errors.email.message}</span>}

            <input
              type="text"
              name="password"
              placeholder="Ingrese Clave"
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="field"
            />
            {errors.password && <span> {errors.password.message}</span>}

            <input
              type="text"
              name="name"
              placeholder="Ingrese Nombre"
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="field"
            />
            {errors.name && <span> {errors.name.message}</span>}

            <button type="submit" className="loginButton">
              {props.buttonText}
            </button>
          </form>
          

         
      

        

        {isLoaded ? (
          <h2>{errorMessage}</h2>
          
        ) : (

          <ul>
            {user.map((user) => (
              <li key={user.name}>
                <h2>{message}</h2>
                <p>
                  Welcome  {user.name}! <br />
                  thanks for register!
                </p>
              </li>
              
            ))}
            
          </ul>
          
        )}
         
      

    </Fragment>
  );
};


export default UserForm;
