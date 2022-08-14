import { BreadCrumb } from "primereact/breadcrumb"
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableAuth } from "../../components/TableAuth"

export const DetailsUserPage = () => {

  const [userFilter, setUserFilter] = useState('')
  const navigate = useNavigate()

  const items = [
    { label: 'Users'}
    // { label: 'Sports' },
    // { label: 'Football' },
  ];

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

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <TableAuth  className="align-content-center" title={title}/>
      </div>
    </>
  )
}
