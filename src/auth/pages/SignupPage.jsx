
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

import { createUser } from '../helpers/createUser';

import './login.css';
import './signupPage.css'

export const SignupPage = () => {
    const toast = useRef(null);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        city: '',
        zip:''
    })

    const { name, email, password, country, city, zip } = user

    const handleSignup = async() => {
        const users = await createUser(user);
        toast.current.show({severity:'success', summary: 'Success', detail:'Account created', life: 3000});
    }


    const footer = <span>
        <Button
            label="Create account"
            className='p-button-primary p-button-rounded sm:col-6 md:col-6'
            onClick={() => handleSignup()}
        />

        <br />

        <div className='mt-2' style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button
                label="Sign in"
                className="p-button-text p-button-rounded p-button-secondary underline"
                onClick={() => navigate('/login')}
            />
        </div>

    </span>


    return (
        <>
        <Toast ref={toast} />
        <div className="login signup-page-bg">

            <Link to="/home" >Home</Link>
            <Link to="/adminLogin" >Admin</Link>

            <div className='card-container'>
                <Card className="sm:col-10 md:col-4 mx-3 animate__animated animate__fadeInLeft" title="Sign Up" footer={footer}>

                    <div className="m-0" style={{lineHeight: '1.5'}}>
                        <span className="p-input-icon-left">
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

                        <span className="p-input-icon-left mt-2">
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

                        <span className="p-input-icon-left mt-2">
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

                        <span className="p-input-icon-left mt-2">
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

                        <span className="p-input-icon-left mt-2">
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

                        <span className="p-input-icon-left mt-2">
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
        </div>
        </>
    )
}