import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { getAllUsers } from '../helpers/getAllUsers';
import { Button } from 'primereact/button';

import './tableAuth.css'
import { deleteUser } from '../helpers';

export const TableAuth = () => {

  const [users, setUsers] = useState([])

  const getUsers = async() => {
    setUsers(await getAllUsers())
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleEditUser = (rowData) => {
    console.log('handleEditUser ', rowData);
  }

  const handleDeleteUser = async (rowData) => {
    console.log('handleDeleteUser ',rowData._id);
    const response = await deleteUser(rowData._id)
    console.log('response handleDeleteUser ', response)
    getUsers()
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button icon="pi pi-pencil" className=" p-button-outlined p-button-  p-button-primary mr-2" onClick={() => handleEditUser(rowData)} />
        <Button icon="pi pi-trash" className="p-button-outlined p-button-warning p-button-danger" onClick={() => handleDeleteUser(rowData)} />
      </>
    );
  }

  return (
    <>
      <Card title="Users" style={{ width: '95%'}}>
        <DataTable
          value={users.data}
          size="small"
          responsiveLayout="scroll"
          selectionMode="single"
          selection
          stripedRows
          scrollable
          scrollHeight="400px"
        >
            <Column field="_id" header="ID"></Column>
            <Column sortable field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="country" header="Country"></Column>
            <Column field="city" header="City"></Column>
            <Column field="zip" header="Zip"></Column>
            <Column field="password" header="Password"></Column>
            <Column body={actionBodyTemplate} header="Actions"></Column>
        </DataTable>
      </Card>

    </>
  )
}
