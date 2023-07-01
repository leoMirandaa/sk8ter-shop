import { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import { Toast } from "primereact/toast";

import { authenticateUser } from "../../services/auth/authenticateUser";
import { UserContext } from "./context/UserContext";
import "../../styles/auth/login.scss";

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

  return (
    <>
      <Toast ref={toast} />
      <section className="logIn">
        <h1 className="logIn__title">Login</h1>

        <div className="logIn__userNameInput p-float-label">
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
            ref={userNameInput}
          />
          <label htmlFor="name">User name</label>
        </div>

        <div className="logIn__passwordInput p-float-label">
          <InputText
            id="password"
            value={password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
            type="password"
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="logIn__forgotPassword">
          <a href="#">Forgot your password?</a>
        </div>

        <Button
          label="Sign in"
          className="logIn__button"
          onClick={handleSubmit}
        />

        <p className="logIn__register">
          Don't you have account?{" "}
          <a
            className="text-primary"
            href="/sign_up"
          >
            Register now
          </a>
          {/* <a href="/home">Home</a> */}
        </p>
      </section>
    </>
  );
};
