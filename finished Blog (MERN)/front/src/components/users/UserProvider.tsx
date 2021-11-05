import React, { useState, useEffect, createContext, ContextType } from "react";

export const UserContext = createContext<any>({});

const UserProvider = (props: any) => {
  const [userName, setUserName] = useState("");
  const localUser = localStorage.getItem("userName");
  useEffect(() => {
    if (localUser) {
      setUserName(localUser);
    } else {
      setUserName("");
    }
  }, []);

  return (
    <UserContext.Provider value={[ userName, setUserName ]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
