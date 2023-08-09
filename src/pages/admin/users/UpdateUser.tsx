import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { Toast } from "primereact/toast";

import { getUser, updateUser } from "../../../services/users";
import "../../../styles/admin/cardForm.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
  country: "",
  city: "",
  zip: "",
  role: "",
};

export const UpdateUser = () => {
  const [user, setUser] = useState(initialState);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const toast = useRef(null);

  const { name, email, password, country, city, zip, role } = user;

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    const user_request = await getUser(params.id);
    setUser(user_request.data);
  };

  const handleUpdate = async (user) => {
    setIsEmptyField(false);
    if (user.name === "" || user.password === "" || user.email === "") {
      setIsEmptyField(true);

      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Fields required",
        life: 3000,
      });
    } else {
      const response = await updateUser(params.id, user);
      console.log("handleUpdate ", response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "User updated",
        life: 3000,
      });
      // navigate(-1)
    }
  };

  const title = () => {
    return (
      <div className="table__header__container__backbutton">
        <Button
          text
          rounded
          icon="pi pi-arrow-left"
          onClick={() => navigate(-1)}
        />
        Update User
      </div>
    );
  };

  const footer = () => {
    return (
      <div style={{ textAlign: "right" }}>
        <Button
          outlined
          className="mr-2"
          label="Cancel"
          severity="secondary"
          onClick={() => navigate(-1)}
        />
        <Button
          label="Confirm"
          onClick={() => handleUpdate(user)}
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="table__container">
        <Card
          className="card__form animate__animated animate__fadeIn"
          title={title}
          footer={footer}
        >
          <form action="#">
            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="username">User Name</label>
                <InputText
                  id="username"
                  value={name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid Value
              </small> */}
              </div>
              <div className="card__form__row__container">
                <label htmlFor="password">Password</label>
                <InputText
                  id="password"
                  value={password}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                  type="password"
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid Value
              </small> */}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <InputText
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${isEmptyField && "p-invalid"}`}
                  type="password"
                  aria-describedby="username2-help"
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid User Name.
              </small> */}
              </div>
            </div>

            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="email">Email</label>
                <InputText
                  id="email"
                  value={email}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                  type="email"
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid value
              </small> */}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="country">Country</label>
                <InputText
                  id="country"
                  value={country}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      country: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid value
              </small> */}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="city">City</label>
                <InputText
                  id="city"
                  value={city}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      city: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid value
              </small> */}
              </div>
            </div>

            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="zip">Street</label>
                <InputText
                  id="zip"
                  value={zip}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      zip: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                  keyfilter="num"
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid value
              </small> */}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="zip">Zip</label>
                <InputText
                  id="zip"
                  value={zip}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      zip: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                  keyfilter="num"
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid value
              </small> */}
              </div>
            </div>

            <div className="card__form__row__role">
              <h4>Select a role: </h4>
              <div className="card__form__row__role__container">
                <div>
                  <RadioButton
                    inputId="user"
                    name="user"
                    value="User"
                    onChange={(e: RadioButtonChangeEvent) =>
                      setUser({ ...user, role: e.target.value })
                    }
                    checked={role === "User"}
                  />
                  <label htmlFor="user">User</label>
                </div>
                <div>
                  <RadioButton
                    inputId="admin"
                    name="admin"
                    value="Admin"
                    onChange={(e: RadioButtonChangeEvent) =>
                      setUser({ ...user, role: e.target.value })
                    }
                    checked={role === "Admin"}
                  />
                  <label htmlFor="admin">Admin</label>
                </div>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
