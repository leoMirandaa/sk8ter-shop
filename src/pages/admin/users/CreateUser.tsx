import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import { createUser } from "../../../services/users";
import { TableForm } from "../../../components/admin";

const userInitState = {
  name: "",
  email: "",
  password: "",
  country: "",
  city: "",
  zip: "",
  role: "User",
};

export const CreateUser = () => {
  const [user, setUser] = useState(userInitState);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleCreate = async (user) => {
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
      console.log("handleCreate reponse ", response);

      setUser(userInitState);

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "User created",
        life: 3000,
      });
      // navigate(-1)
    }
  };

  const resetForm = () => {
    setUser(userInitState);
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
        Create User
      </div>
    );
  };

  const footer = () => {
    return (
      <div style={{ textAlign: "right" }}>
        <Button
          outlined
          className="mr-2"
          label="Reset"
          severity="secondary"
          onClick={resetForm}
        />
        <Button
          label="Confirm"
          onClick={() => handleCreate(user)}
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} />

      <TableForm
        title={title}
        footer={footer}
        user={user}
        setUser={setUser}
        isEmptyField={isEmptyField}
      />

      {/* <Table
        users={usersFiltered}
        columns={userTableColumns}
        title={title}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      /> */}
    </>
  );
};
