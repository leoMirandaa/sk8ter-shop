import { useEffect, useRef, useState } from 'react';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';

import { deleteUser, getAllUsers } from '../helpers';
import './tableAuth.css'

export const TableAuth = () => {

  const [users, setUsers] = useState([])
  const [userFilter, setUserFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const toast = useRef(null);

  const getUsers = async() => {
    setUsers(await getAllUsers())
    setIsLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleCreateUser = () => {
    console.log('handleCreateUser');
  }

  const handleEditUser = (rowData) => {
    console.log('handleEditUser ', rowData);
  }

  const handleDeleteUser = async (rowData) => {
    console.log('handleDeleteUser ',rowData._id);
    const response = await deleteUser(rowData._id)
    console.log('response handleDeleteUser ', response)
    toast.current.show({severity:'success', summary: 'Success', detail:'User deleted', life: 3000});
    getUsers()
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button icon="pi pi-pencil" className=" p-button-text p-button-primary mr-2" onClick={() => handleEditUser(rowData)} />
        <Button icon="pi pi-trash" className="p-button-text p-button-danger" onClick={() => handleDeleteUser(rowData)} />
      </>
    );
  }

  const title = () => {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <span>Users</span>

          <span className='p-input-icon-left'>
            <i className='pi pi-search'/>
            <InputText
              value={userFilter}
              onChange={(e) => setUserFilter(e.target.value)}
              placeholder="Search user"
            />
          </span>

          <div>
            <Button
                label="Create User"
                icon="pi pi-plus"
                className='p-button-primary p-button-rounded mr-2'
                onClick={ () => handleCreateUser()}
            />
          </div>
        </div>

      </>

    )
  }

  return (
    <>
      <Toast ref={toast} />

      {
        isLoading
        ? <ProgressSpinner strokeWidth={3}/>
        : <Card title={title} style={{ width: '95%'}}>
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
      }


    </>
  )
}
