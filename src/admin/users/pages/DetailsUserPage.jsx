import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TableUI, SkeletonUI } from "../components";
import { getAllUsers, getUserByName } from "../helpers";

import { BreadCrumb } from "primereact/breadcrumb"
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import './usersPage'

export const DetailsUserPage = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputSearchFilter, setInputSearchFilter] = useState('')
  const [usersFiltered, setUsersFiltered] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
  }, [])


  const getUsers = async() => {
    const fetchUsers = await getAllUsers()
    setUsers( fetchUsers.data )
    setUsersFiltered( fetchUsers.data )
    setIsLoading(false)
  }

  const handleCreateUser = () => {
    navigate('create')
  }

  const handleInputSearch = async(event) => {
    let name = event.target.value
    setInputSearchFilter(name)
    setUsersFiltered( getUserByName(users, name) )
  }

  const breadcrumbItems = [{ label: 'Users' }];
  const breadcrumbHome = { icon: 'pi pi-home', label: 'Admin', command: () => navigate('/admin') }
  const skeletonFields = ["Name", "Email", "Country", "City", "Zip", "Status", "Password", "Actions"]

  const title = () => {
    return (
      <>
        <div className="flex flex-column md:flex-row md:justify-content-between">
          <span className='table-auth-span'>
            <Button
              icon="pi pi-arrow-left"
              className='p-button-text p-button-rounded mr-2'
              onClick={ () => navigate(-1)}
            />
            Users
          </span>

          <span className='p-input-icon-left w-full md:w-auto  mt-2 md:mt-0 flex-order-1 md:flex-order-0'>
            <i className='pi pi-search '/>
            <InputText
              value={ inputSearchFilter }
              onChange={ handleInputSearch }
              placeholder="Search"
              className="w-full"
            />
          </span>

          <div className="flex-order-0 mb-2 md:mb-0">
            <Button
              label="Create User"
              icon="pi pi-plus"
              className='p-button-primary p-button-rounded mr-2 mt-2 md:mt-0'
              onClick={ () => handleCreateUser()}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {
        isLoading
        ?
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        {/* <div > */}
          <SkeletonUI  fields={ skeletonFields }/>
        </div>
        :
        <div>
          <BreadCrumb
            model = { breadcrumbItems }
            home = { breadcrumbHome }
          />

          <div style={{ display: 'flex', justifyContent: 'center'}}>
            {/* <div> */}
            <TableUI
              className="align-content-center"
              users = { usersFiltered }
              title = { title }
              getUsers = { getUsers }
            />
          </div>
        </div>
      }
    </>
  )
}
