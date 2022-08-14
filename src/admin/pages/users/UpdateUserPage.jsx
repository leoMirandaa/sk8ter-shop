import { useEffect } from 'react'
import { BreadCrumb } from 'primereact/breadcrumb'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Toast } from 'primereact/toast'
import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser, updateUser } from '../../helpers'

export const UpdateUserPage = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    city: '',
    zip:''
  })
  const { name, email, password, country, city, zip } = user
  const params = useParams()
  const navigate = useNavigate()
  const toast = useRef(null);

  useEffect( () => {
    handleGetUser()
  },[])


  const handleGetUser = async() => {
    const user_request = await getUser(params.id)
    setUser(user_request.data)
  }


  const handleUpdateUser = async(user) => {
    response = await updateUser(params.id, user)
    console.log('handleUpdateUser ',response);
    // const response = await createUser(user)
    // console.log('handleUpdateUser reponse ', response);
    // toast.current.show({severity:'success', summary: 'Success', detail:'User created', life: 3000});
  }

  const handleCancelCreateUser = () => {
    setUser({
      name: '',
      email: '',
      password: '',
      country: '',
      city: '',
      zip:''
    })
  }

  const title = () => {
    return (
      <div>
        <h3 style={{margin: 0}}>Update user</h3>
      </div>
    )
  }

  const footer =
  <div style={{textAlign: 'right'}} className="mt-4">
    <Button
        label="Confirm"
        className='p-button-help p-button-rounded mr-2'
        onClick={() => handleUpdateUser(user)}
    />

    <Button
        label="Cancel"
        className='p-button-secondary p-button-rounded'
        onClick={() => handleCancelCreateUser()}
    />
  </div>


  const items = [{ label: 'Update user' }];
  const home = { icon: 'pi pi-home', label: 'Admin', command: () => navigate('-1') }

  return (
    <>
      <Toast ref={toast} />

      <BreadCrumb
        model={items}
        home={home}
      />

      <div style={{display: 'flex', justifyContent: 'center'}}>
          <Card
            className="mx-3 animate__animated animate__fadeInLeft"
            title={title}
            footer={ footer }
            style={{ width: '65%'}}
          >

          <h3 style={{ margin: '10px 0px 5px 0px', textAlign: 'left'}}>Account data</h3>

              <div className="m-0 " style={{lineHeight: '1.5'}}>
                  <span className="p-input-icon-left mr-4">
                      <i className="pi pi-user" />
                      <InputText
                          value={name}
                          onChange={(e)=>setUser({
                                  ...user,
                                  name: e.target.value
                          })}
                          placeholder="User name"
                      />
                  </span>

                  <span className="p-input-icon-left mt-2 mr-4">
                      <i className="pi pi-lock" />
                      <InputText
                          value={password}
                          type="password"
                          onChange={(e)=>setUser({
                                  ...user,
                                  password: e.target.value
                          })}
                          placeholder="Password"
                      />
                  </span>

                  <span className="p-input-icon-left mt-2 mr-4">
                      <i className="pi pi-lock" />
                      <InputText
                          value={email}
                          type="email"
                          onChange={(e)=>setUser({
                                  ...user,
                                  email: e.target.value
                          })}
                          placeholder="Email"
                      />
                  </span>

                  <h3 style={{ margin: '25px 0px 5px 0px', textAlign: 'left'}}>Personal data</h3>

                  <span className="p-input-icon-left mt-2 mr-4">
                      <i className="pi pi-lock" />
                      <InputText
                          value={ country }
                          type="country"
                          onChange={(e)=>setUser({
                                  ...user,
                                  country: e.target.value
                          })}
                          placeholder="Country"
                      />
                  </span>

                  <span className="p-input-icon-left mt-2 mr-4">
                      <i className="pi pi-lock" />
                      <InputText
                          value={ city }
                          type="city"
                          onChange={(e)=>setUser({
                                  ...user,
                                  city: e.target.value
                          })}
                          placeholder="City"
                      />
                  </span>

                  <span className="p-input-icon-left mt-2 mr-4">
                      <i className="pi pi-lock" />
                      <InputText
                          value={ zip }
                          type="zip"
                          onChange={(e)=>setUser({
                                  ...user,
                                  zip: e.target.value
                          })}
                          placeholder="Zip"
                      />
                  </span>
              </div>
          </Card>
          {/* <Button onClick={showError} label="Error" className="p-button-danger" /> */}
      </div>
    </>
  )
}
