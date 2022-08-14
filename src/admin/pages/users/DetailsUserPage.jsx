import { BreadCrumb } from "primereact/breadcrumb"
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableAuth } from "../../components/TableAuth"
import { getAllUsers } from "../../helpers";

export const DetailsUserPage = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [userFilter, setUserFilter] = useState('')
  const navigate = useNavigate()

  const items = [{ label: 'Users' }];

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async() => {
    const userRequest = await getAllUsers()
    setUsers( userRequest )
    setIsLoading(false)
    console.log('get USer****');
  }

  const handleCreateUser = () => {
    console.log('handleCreateUser');
    navigate('create')
  }

  const home = { icon: 'pi pi-home', label: 'Admin', command: () => navigate('/admin') }

  const title = () => {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <span className='table-auth-span'>
            <Button
                  icon="pi pi-arrow-left"
                  className='p-button-text p-button-rounded  mr-2'
                  onClick={ () => navigate(-1)}
              />
            Users
          </span>

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
      <BreadCrumb
        model={items}
        home={home}
      />

      {
        isLoading
        ? <ProgressSpinner strokeWidth={3}/>
        :
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <TableAuth  className="align-content-center" users={users} title={title} getUsers={getUsers}/>
      </div>
      }

    </>
  )
}
