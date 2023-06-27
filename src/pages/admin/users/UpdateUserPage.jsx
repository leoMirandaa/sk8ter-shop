import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { FormUI } from "../../../components/users";
import { getUser, updateUser } from "../../../services/users";

import { BreadCrumb } from "primereact/breadcrumb";
import { Toast } from "primereact/toast";

import "./update.css";

export const UpdateUserPage = () => {
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
  const params = useParams();
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    const user_request = await getUser(params.id);
    setUser(user_request.data);
  };

  const handleUpdateUser = async (user) => {
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
      console.log("handleUpdateUser ", response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "User updated",
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

  const breadCrumbItems = [
    { label: "Users", command: () => navigate(-1) },
    { label: "Update user" },
  ];
  const breadCrumbHome = {
    icon: "pi pi-home",
    label: "Admin",
    command: () => navigate(-2),
  };

  return (
    <>
      <Toast ref={toast} />

      <BreadCrumb
        model={breadCrumbItems}
        home={breadCrumbHome}
      />

      <FormUI
        formTitle={"Update user"}
        user={user}
        setUser={setUser}
        handleUser={handleUpdateUser}
        resetForm={handleCancelCreateUser}
        isEmptyField={isEmptyField}
      />
    </>
  );
};
