import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteUser, } from '../helpers';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';

export const TableUI = ({ users, title, getUsers }) => {

  const navigate = useNavigate()
  const toast = useRef(null);

  const handleUpdate = (rowData) => {
    // console.log('handleUpdate ', rowData);
    navigate(`update/${rowData._id}`)
  }

  const handleDeleteUser = async (rowData) => {
    const response = await deleteUser(rowData._id)
    // console.log('response handleDeleteUser ', response)
    toast.current.show({severity:'success', summary: 'Success', detail:'User deleted', life: 3000});
    getUsers();
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <>
      {/* display ${users[0]._id == "62fc1d22f87e7a7af93b12e8" ? "hidden": ""} */}
        <Button icon="pi pi-pencil" className={`p-button-text p-button-primary p-button-rounded mr-2 `} onClick={() => handleUpdate(rowData)} />
        <Button icon="pi pi-trash" className="p-button-text p-button-danger p-button-rounded" onClick={() => handleDeleteUser(rowData)} />
      </>
    );
  }

  return (
    <>
      <Toast ref={toast} />

        <Card
          title={title}
          // className="min-w-full md:min-w-0">
          className="w-full lg:w-10"
        >
        {/* <Card title={title}> */}
          <DataTable
            value={users}
            size="small"
            // responsiveLayout="scroll"
            // scrollable
            selectionMode="single"
            selection
            stripedRows
            dataKey="id"
            // scrollHeight="400px"
            breakpoint="950px"
            paginator
            rows={8}
            rowsPerPageOptions={[8,15,20]}
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
