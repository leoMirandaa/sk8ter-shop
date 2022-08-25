import React, { useContext, useState } from 'react'

import { Menubar } from 'primereact/menubar';
import { SplitButton } from 'primereact/splitbutton';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContext';
import { Button } from 'primereact/button';

export const Navbarr = () => {

  const {globalUser, setGlobalUser} = useContext(UserContext)
  const [{ name }, setUserInLocalStorage] = useState(JSON.parse(localStorage.getItem('User')))

  console.log('name... ',name)
  const navigate = useNavigate()

  const adminOptions =  [
    {icon: 'pi pi-home', command: () => navigate('/home')},
    {label: 'Women', command: () => navigate('/women')},
    {label: 'Men', command: () => navigate('/men')},
    {label: 'Kids', command: () => navigate('/kids')},
    {label: 'Discounts', command: () => navigate('/coupons')},
    {label: 'Admin', command: () => navigate('/admin')},
  ];

  const userOptions =  [
    {icon: 'pi pi-home', command: () => navigate('/home')},
    {label: 'Women', command: () => navigate('/women')},
    {label: 'Men', command: () => navigate('/men')},
    {label: 'Kids', command: () => navigate('/kids')},
    {label: 'Discounts', command: () => navigate('/coupons')},
  ];

  const items = (name === "admin") ? adminOptions : userOptions

  const profileButton = [
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => { navigate('/settings')}
    },
    {
      label: 'LogOut',
      icon: 'pi pi-power-off',
      command: () => {
        // setGlobalUser('')
        localStorage.setItem('User', JSON.stringify('') )
        navigate('/home')
        window.location.reload(false);
      }
    },

  ]


  const end =
    ( name )
    ?
      <SplitButton
        label={JSON.parse(localStorage.getItem('User')).name}
        icon="pi pi-user "
        className='p-button-primary p-button-text p-button-oulined'
        model={profileButton}>
      </SplitButton>
    :
      <span>
        <Button
          label="Log in"
          className='p-button-primary p-button-outlined  mr-2'
          onClick={ () => navigate('/login')}
        />

        <Button
          label="Sign up"
          className='p-button-secondary  '
          onClick={ () => navigate('/sigup')}
        />

      </span>


    const start =
    <div>
      <b
        className='mr-6 text-primary'
        style={{cursor: 'pointer'}}
        onClick={ () => navigate('/home')}
      >
        Clothing store
      </b>
    </div>

  return (
    <>
      <Menubar
        className='navbar-menubar bg-primary'
        // className='navbar-menubar  font-bold'
        model={items}
        start={start}
        end={end}
      />
    </>
  )
}
