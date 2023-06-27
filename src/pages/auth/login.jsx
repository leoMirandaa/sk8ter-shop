import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

import { authenticateUser } from "../../services/auth/authenticateUser";
import { UserContext } from "./context/UserContext";
import { useEffect } from "react";

export const Login = () => {
  const { handleSetGlobalUser } = useContext(UserContext);

  const toast = useRef(null);
  const userNameInput = useRef(null);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const { name, password } = user;

  useEffect(() => {
    userNameInput.current.focus();
  }, []);

  const handleSubmit = async () => {
    const authenticated = await authenticateUser(user);
    console.log("----- ", authenticated);

    if (authenticated.data === "User not found") {
      toast.current.show({
        severity: "error",
        summary: "Login failed",
        detail: "User or password incorrect",
        life: 3000,
        position: "top-right",
      });
    } else {
      localStorage.setItem("user", JSON.stringify(authenticated.data));
      await handleSetGlobalUser(authenticated.data);
      navigate("/home");
    }
  };

  const footer = (
    <span>
      <Button
        label="Sign in"
        className="p-button-primary p-button-rounded w-6 md:w-auto lg:md-auto flex m-auto"
        onClick={() => handleSubmit()}
      />

      <br />

      <div className="mt-2 flex justify-content-end">
        <Button
          label="Register"
          className="p-button-secondary p-button-text p-button-rounded underline"
          onClick={() => navigate("/sign_up")}
        />
      </div>
    </span>
  );

  return (
    <>
      <Toast ref={toast} />
      <Link to="/home">Home</Link>
      <Link to="/adminLogin">Admin</Link>
      <Card
        className="animate__animated animate__fadeInLeft w-full md:w-auto text-center"
        title="Log in"
        footer={footer}
      >
        <div className="mt-2">
          <span className="p-float-label inline-block w-full">
            <InputText
              id="name"
              value={name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
              type="text"
              className="w-full"
              ref={userNameInput}
            />
            <label htmlFor="name">User name</label>
          </span>

          <span className="p-float-label inline-block w-full mt-5">
            <InputText
              id="password"
              value={password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              className="w-full"
              type="password"
            />
            <label htmlFor="password">Password</label>
          </span>
        </div>
      </Card>
    </>
  );
};
