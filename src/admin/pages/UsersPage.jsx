import { TableAuth } from "../components/TableAuth"
import { BreadCrumb } from 'primereact/breadcrumb';
import { Navigate, useNavigate } from "react-router-dom";

import './users.css'

export const UsersPage = () => {

const navigate = useNavigate()

  const items = [
    { label: 'Users'}
    // { label: 'Sports' },
    // { label: 'Football' },
];

const home = { icon: 'pi pi-home', label: 'Admin', command: () => navigate('/admin') }

  return (
    <div className="usersContainer animate__animated animate__fadeIn">
      <BreadCrumb
        model={items}
        home={home}
      />

      {/* <h1>Users</h1> */}

      <TableAuth className="align-content-center"/>
    </div>
  )
}
