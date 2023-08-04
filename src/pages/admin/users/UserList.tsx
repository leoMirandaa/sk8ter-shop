import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import { userTableColumns } from "../../../utils/userTableColumns";
import {
  deleteUser,
  getAllUsers,
  getUserByName,
} from "../../../services/users";
import "../../../styles/admin/table.scss";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearchFilter, setInputSearchFilter] = useState("");
  const [usersFiltered, setUsersFiltered] = useState("");
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const fetchUsers = await getAllUsers();
    setUsers(fetchUsers.data);
    setUsersFiltered(fetchUsers.data);
    setIsLoading(false);
  };

  const handleCreate = () => {
    navigate("create");
  };

  const handleUpdate = (userId: string) => {
    navigate(`update/${userId}`);
  };

  const handleDelete = async (
    event: ChangeEvent<HTMLInputElement>,
    userId: string
  ) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to delete this user?",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await deleteUser(userId);

        toast.current.show({
          severity: "success",
          summary: "Confirmed",
          detail: "User deleted",
          life: 3000,
        });

        getUsers();
      },
    });
  };

  const handleInputSearch = async (event) => {
    let name = event.target.value;
    setInputSearchFilter(name);
    setUsersFiltered(getUserByName(users, name));
  };

  const title = () => {
    return (
      <TableHeader
        inputSearchFilter={inputSearchFilter}
        handleInputSearch={handleInputSearch}
        handleCreate={handleCreate}
      />
    );
  };

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={userTableColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            users={usersFiltered}
            columns={userTableColumns}
            title={title}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
