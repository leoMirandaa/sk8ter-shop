import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { FormUI } from "../../components/users";
import { createUser } from "../../services/users";

import { BreadCrumb } from "primereact/breadcrumb";
import { Toast } from "primereact/toast";

export const CreateUserPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    city: "",
    zip: "",
  });

  const [isEmptyField, setIsEmptyField] = useState(false);
  // const { name, email, password, country, city, zip } = user

  const navigate = useNavigate();
  const toast = useRef(null);

  const handleCreateUser = async (user) => {
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
      const response = await createUser(user);
      console.log("handleCreateUser reponse ", response);

      setUser({
        name: "",
        email: "",
        password: "",
        country: "",
        city: "",
        zip: "",
      });

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "User created",
        life: 3000,
      });
      // navigate(-1)
    }
  };

  const handleCancelCreateUser = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      country: "",
      city: "",
      zip: "",
    });
  };

  const items = [
    { label: "Users", command: () => navigate(-1) },
    { label: "Create user" },
  ];
  const home = {
    icon: "pi pi-home",
    label: "Admin",
    command: () => navigate(-2),
  };

  return (
    <>
      <Toast ref={toast} />

      <BreadCrumb
        model={items}
        home={home}
      />

      <FormUI
        formTitle="Create user"
        user={user}
        setUser={setUser}
        handleUser={handleCreateUser}
        resetForm={handleCancelCreateUser}
        isEmptyField={isEmptyField}
      />
    </>
  );
};
