
import { useState } from 'react';
import './login.css'

import { Card } from 'primereact/card';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


export const Login = () => {

    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    const { userName, password } = user

    const header = <img alt="Card" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.namesnack.com%2Fimages%2Fnamesnack-clothing-rental-business-names-3840x2560-20200915.jpeg%3Fcrop%3D40%3A21%2Csmart%26width%3D1200%26dpr%3D2%26format%3Dpjpg&f=1&nofb=1'/>;

    const footer = <span>
        <Button label="SignIn" className='p-button-help' style={{marginRight: '.25em', width: '15rem'}}/>
        {/* <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/> */}
    </span>


  return (
    <>
        <Card title="LogIn" style={{ width: '25em', height: '20rem' }} footer={footer}>

                <div className="m-0" style={{lineHeight: '1.5'}}>
                    <span className="p-input-icon-left">
                        <i className="pi pi-user" />
                        <InputText
                            value={userName}
                            style={{width: '20rem'}}
                            onChange={(e)=>setUser({
                                userName: e.target.value,
                                password: password
                            })}
                            placeholder="User name"
                        />
                    </span>

                    <span className="p-input-icon-left mt-5">
                        <i className="pi pi-lock" />
                        <InputText
                            value={password}
                            style={{width: '20rem'}}
                            type="password"
                            onChange={(e)=>setUser({
                                userName: userName,
                                password: e.target.value
                            })}
                            placeholder="Password"
                        />
                    </span>
                </div>

        </Card>
    </>
  )
}