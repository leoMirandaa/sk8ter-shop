import { useEffect, useState } from "react";
import { getUser } from "../../../services/users";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const initialState = {
    name: "",
  };

  const [globalUser, setGlobalUser] = useState([]);

  const loadUserFromServer = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      let serverUser = await getUser(user._id);
      setGlobalUser(serverUser.data);
    }
  };

  useEffect(() => {
    loadUserFromServer();
  }, []);

  const handleSetGlobalUser = (user) => {
    setGlobalUser(user);
  };

  return (
    <UserContext.Provider value={{ globalUser, handleSetGlobalUser }}>
      {children}
    </UserContext.Provider>
  );
};
