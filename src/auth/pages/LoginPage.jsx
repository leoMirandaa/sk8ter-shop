
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

// import './login.css';
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
			console.log('globaluser ', JSON.stringify(authenticated.data));
			localStorage.setItem('User', JSON.stringify(authenticated.data) );
			navigate('/home')
		}
	}

	const footer =
		<span>
			<Button
				label="Sign in"
				// style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
				className='p-button-primary p-button-rounded w-6 md:w-auto lg:md-auto flex m-auto'
				onClick={() => handleSubmit()}
			/>

			<br />

			<div className='mt-2 flex justify-content-end'>
				<Button
					label="Sign up"
					className='p-button-secondary p-button-text p-button-rounded underline'
					onClick={ () => navigate('/sigup') }
				/>
			</div>
		</span>


  return (
    <>
			<Toast ref={toast} />
			<Link to="/home" >Home</Link>
			<Link to="/adminLogin" >Admin</Link>

			<div className="login-page-bg">

				<div className='flex flex-column justify-content-center align-items-center h-screen p-4'>
					<Card
						className="animate__animated animate__fadeInLeft w-full md:w-auto text-center"
						title="Log in"
						footer={footer}
					>

						<div className='mt-2'>
							<span className="p-float-label inline-block w-full">
									<InputText
										id="name"
										value={ name }
										onChange={(e)=>setUser({
											...user,
											name: e.target.value
										})}
										type="text"
										className='w-full'
										// className={`w-full lg:w-auto ${isEmptyField && 'p-invalid'}`}
									/>
									<label htmlFor="name">User name</label>
							</span>

							<span className="p-float-label inline-block w-full mt-5">

									<InputText
										id="password"
										value={password}
										onChange={(e)=>setUser({
											...user,
											password: e.target.value
										})}
										className="w-full"
										// className={`w-full lg:w-auto ${isEmptyField && 'p-invalid'}`}
										type="password"
									/>
									<label htmlFor="password">Password</label>
							</span>
						</div>
					</Card>
					{/* <Button onClick={showError} label="Error" className="p-button-danger" /> */}
				</div>
			</div>
    </>
  )
}