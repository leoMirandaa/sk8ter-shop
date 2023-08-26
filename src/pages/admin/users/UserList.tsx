import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

import { User } from "../../../interfaces";
import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import userService from "../../../services/users.service";
import tableColumns from "../../../utils/adminTableColumns";
import "../../../styles/admin/table.scss";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    let filteredUsers = users;
    if (filteredUsers.length > 0) {
      filteredUsers = filteredUsers.filter((user: User) =>
        user?.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredUsers(filteredUsers);
  }, [searchTerm]);

  const getUsers = async () => {
    const response = await userService.getUsers();
    const data = response.data.map(({ address, ...rest }: User) => {
      return {
        street: address?.street,
        country: address?.country,
        state: address?.state,
        city: address?.city,
        zip: address?.zip,
        ...rest,
      };
    });
    setUsers(data);
    setFilteredUsers(data);
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
        await userService.deleteUser(userId);

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

  const title = () => {
    return (
      <TableHeader
        title="Users"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCreate={handleCreate}
      />
    );
  };

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={tableColumns.userColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            data={filteredUsers}
            columns={tableColumns.userColumns}
            title={title}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
