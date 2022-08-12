import { TableAuth } from "../../components/TableAuth"
import { BreadCrumb } from 'primereact/breadcrumb';

import './users.css'
import { useNavigate } from "react-router-dom";

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
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <TableAuth  className="align-content-center"/>
      </div>
    </div>
  )
}
