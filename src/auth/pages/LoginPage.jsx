
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { TabView, TabPanel } from 'primereact/tabview';


import './login.css';


export const LoginPage = () => {

    const toast = useRef(null);

    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    const { userName, password } = user

    const header = <img alt="Card" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.namesnack.com%2Fimages%2Fnamesnack-clothing-rental-business-names-3840x2560-20200915.jpeg%3Fcrop%3D40%3A21%2Csmart%26width%3D1200%26dpr%3D2%26format%3Dpjpg&f=1&nofb=1'/>;

    const handleSubmit = () => {
        if( userName == 'leopoldo' && password == 'Testing22' ) {
            console.log('authenticated');
            navigate('/home');
            toast.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
        }
        else {
            console.log('login failed')
            toast.current.show({severity:'error', summary: 'Authentication failed', detail:'Wrong userName/password. Try again', life: 3000});
        }
    }

    const footer = <span>
        <Button
            label="SignIn"
            className='p-button-help sm:col-6 md:col-6'
            onClick={() => handleSubmit()}
        />
        <Toast ref={toast} />
    </span>


  return (
    <>
        <div className="login">
            <Link to="/home" >Home</Link>

            <div className='card-container'>
                <Card className="sm:col-10 md:col-4 mx-3" title="LogIn" footer={footer}>

										<div className="m-0" style={{lineHeight: '1.5'}}>
												<span className="p-input-icon-left">
														<i className="pi pi-user" />
														<InputText
																value={userName}
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

                {/* <Button onClick={showError} label="Error" className="p-button-danger" /> */}
            </div>
        </div>
    </>
  )
}