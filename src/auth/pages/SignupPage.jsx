
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

import { useFormik } from "formik";

import { createUser } from '../helpers/createUser';
import { basicSchema } from '../schemas';

export const SignupPage = () => {
    const toast = useRef(null);
    const navigate = useNavigate();

		const onSubmit = async(values, actions) => {
			// console.log('values ', values);
			// console.log('actions ', actions);
			// await new Promise((resolve) => setTimeout(resolve, 1000))
			const users = await createUser(values);
			toast.current.show({severity:'success', summary: 'Success', detail:'Account created', life: 3000});
			actions.resetForm()
		}

		const formik = useFormik({
			initialValues: {
				name: '',
        email: '',
        password: '',
				confirmPassword: '',
        country: '',
        city: '',
        zip:''
			},

			validationSchema: basicSchema,

			onSubmit: onSubmit
		})

		console.log('formik', formik );
		console.log('errors ', formik.errors);


    const handleSignup = async() => {
        const users = await createUser(formik.values);
        toast.current.show({severity:'success', summary: 'Success', detail:'Account created', life: 3000});
    }

    return (
        <>
        <Toast ref = { toast } />
        <div className="signup-page-bg">
					<span className='text-white' style={{ display:'inline' }}>Clothing store</span>
					<div className='flex flex-column justify-content-center align-items-center min-h-screen p-4'>
						<Card
							className="animate__animated animate__fadeInLeft w-full md:w-auto text-center"
							title="Sign up"
						>

							<form onSubmit={ formik.handleSubmit } >
								<div className='mt-2'>
									<span className="p-float-label w-full md:w-6 mr-3">
											<InputText
												id="name"
												value={ formik.values.name }
												onChange={ formik.handleChange }
												onBlur={ formik.handleBlur }
												type="text"
												// className={`w-full ${ formik.errors.name && formik.touched.name ? 'p-invalid' : ''}`}
												className={`w-full ${ formik.errors.name && formik.touched.name ? 'input-invalid' : ''}`}
											/>

											<label htmlFor="name">User name</label>
											{/* { formik.errors.name && formik.touched.name && <small>{formik.errors.name}</small>} */}
                    	{/* <small id="name" className={`w-full ${ formik.errors.name ? 'p-error block' : ''}`}>User name invalid</small> */}
										</span>
								</div>

								<div className=''>
									<span className="p-float-label inline-block w-full mt-5 md:w-auto mr-3">
											<InputText
												id="password"
												value={ formik.values.password }
												onChange={ formik.handleChange }
												onBlur={ formik.handleBlur }
												type="password"
												className={`w-full ${ formik.errors.password && formik.touched.password ? 'input-invalid' : ''}`}

											/>
											<label htmlFor="password">Password</label>
									</span>

									<span className="p-float-label inline-block w-full mt-5 md:w-auto">
											<InputText
												id="confirmPassword"
												value={ formik.values.confirmPassword }
												onChange={ formik.handleChange }
												onBlur={ formik.handleBlur }
												type="password"
												className={`w-full ${ formik.errors.confirmPassword && formik.touched.confirmPassword ? 'input-invalid' : ''}`}

											/>
											<label htmlFor="confirmPassword">Confirm Password</label>
									</span>
								</div>

								<div className='mt-5 md:mt-0'>
									<span className="p-float-label inline-block w-full md:w-auto mr-3">
											<InputText
												id="email"
												value={ formik.values.email }
												onChange={ formik.handleChange }
												type="email"
												className={`w-full ${ formik.errors.email && formik.touched.email ? 'input-invalid' : ''}`}
											/>
											<label htmlFor="email">Email</label>
									</span>

									<span className="p-float-label inline-block w-full mt-5 md:w-auto">
											<InputText
												id="country"
												value={formik.values.country}
												onChange={ formik.handleChange }
												onBlur={ formik.handleBlur }
												type="text"
												className={`w-full ${ formik.errors.country && formik.touched.country ? 'input-invalid' : ''}`}

											/>
											<label htmlFor="country">Country</label>
									</span>
								</div>

								<div className='mt-5 md:mt-0'>
									<span className="p-float-label inline-block w-full md:w-auto mr-3">
											<InputText
												id="city"
												value={ formik.values.city }
												onChange={ formik.handleChange }
												type="text"
												className={`w-full ${ formik.errors.city && formik.touched.city ? 'input-invalid' : ''}`}
											/>
											<label htmlFor="city">City</label>
									</span>

									<span className="p-float-label inline-block w-full mt-5 md:w-auto">
											<InputText
												id="zip"
												value={ formik.values.zip }
												onChange={ formik.handleChange }
												onBlur={ formik.handleBlur }
												type="number"
												className={`w-full ${ formik.errors.zip && formik.touched.zip ? 'input-invalid' : ''}`}

											/>
											<label htmlFor="zip">Zip</label>
									</span>
								</div>

								<Button
									label="Create account"
									className='p-button-primary p-button-rounded mt-5 w-6 md:w-auto lg:md-auto flex m-auto'
									type="submit"
									disabled={ formik.isSubmitting }
									// disabled={ Object.entries(formik.errors).length > 0 }
								/>

								<div className='flex justify-content-end'>
									<Button
										label="Log in"
										className="p-button-text p-button-rounded p-button-secondary underline"
										onClick={() => navigate('/login')}
									/>
								</div>
							</form>

						</Card>
						{/* <Button onClick={showError} label="Error" className="p-button-danger" /> */}
					</div>
        </div>
        </>
    )
}