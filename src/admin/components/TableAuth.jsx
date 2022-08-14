import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';

import { deleteUser, } from '../helpers';
import './tableAuth.css'

export const TableAuth = ({ users, title, getUsers }) => {

  const navigate = useNavigate()

  const toast = useRef(null);

  const handleUpdateUser = (rowData) => {
    console.log('handleUpdateUser ', rowData);
    navigate(`update/${rowData._id}`)
  }

  const handleDeleteUser = async (rowData) => {
    const response = await deleteUser(rowData._id)
    console.log('response handleDeleteUser ', response)
    toast.current.show({severity:'success', summary: 'Success', detail:'User deleted', life: 3000});
    getUsers();
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button icon="pi pi-pencil" className=" p-button-text p-button-primary mr-2" onClick={() => handleUpdateUser(rowData)} />
        <Button icon="pi pi-trash" className="p-button-text p-button-danger" onClick={() => handleDeleteUser(rowData)} />
      </>
    );
  }

  return (
    <>
      <Toast ref={toast} />

        <Card title={title} style={{ width: '95%'}}>
          <DataTable
            value={users.data}
            size="small"
            responsiveLayout="scroll"
            selectionMode="single"
            selection
            stripedRows
            scrollable
            dataKey="id"
            scrollHeight="400px"
          >
              {/* <Column field="_id" header="ID"></Column> */}
              <Column sortable field="name" header="Name"></Column>
              <Column field="email" header="Email"></Column>
              <Column field="country" header="Country"></Column>
              <Column field="city" header="City"></Column>
              <Column field="zip" header="Zip"></Column>
              <Column field="status" header="Status"></Column>
              <Column field="password" header="Password"></Column>
              <Column body={actionBodyTemplate} header="Actions"></Column>
          </DataTable>
        </Card>
    </>
  )
}
