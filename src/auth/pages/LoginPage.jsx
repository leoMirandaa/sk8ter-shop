
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

import './login.css';
import { authenticateUser } from '../helpers/authenticateUser';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {

    const { globalUser, setGlobalUser } = useContext(UserContext)

    const toast = useRef(null);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        password: ''
    })
    const { name, password } = user

    const handleSubmit = async () => {

        const authenticated = await authenticateUser(user);
        console.log('----- ', authenticated)

        if (authenticated.data === 'User not found') {
            toast.current.show({severity:'error', summary: 'Login failed', detail:'User or password incorrect', life: 3000, position:"top-right"});
        }else {
            setGlobalUser(authenticated.data)
            navigate('/home')
        }


    }

    const footer = <span>
        <Button
            label="Sign in"
            className='p-button-primary p-button-rounded sm:col-6 md:col-6'
            onClick={() => handleSubmit()}
        />

        <br />

        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button
                label="Sign up"
                className='p-button-secondary p-button-text outlined p-button-rounded sm:col-6 md:col-6 mt-4 underline'
                onClick={ () => navigate('/sigup') }
            />
        </div>
    </span>


  return (
    <>
        <Toast ref={toast} />

        <div className="login">
            <Link to="/home" >Home</Link>
            <Link to="/adminLogin" >Admin</Link>

            <div className='card-container'>
                <Card className="sm:col-10 md:col-4 mx-3 animate__animated animate__fadeInLeft" title="LogIn" footer={footer}>

                    <div className="m-0" style={{lineHeight: '1.5'}}>
                        <span className="p-input-icon-left">
                            <i className="pi pi-user" />
                            <InputText
                                value={name}
                                onChange={(e)=>setUser({
                                        name: e.target.value,
                                        password: password
                                })}
                                placeholder="User name"
                            />
                        </span>

                        <span className="p-input-icon-left mt-2">
                            <i className="pi pi-lock" />
                            <InputText
                                value={password}
                                type="password"
                                onChange={(e)=>setUser({
                                        name: name,
                                        password: e.target.value
                                })}
                                placeholder="Password"
                            />
                        </span>
                    </div>
                </Card>
                {/* <Button onClick={showError} label="Error" className="p-button-danger" /> */}
            </div>
        </div>
    </>
  )
}