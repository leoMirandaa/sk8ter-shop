import React, { useContext } from 'react'

import { Menubar } from 'primereact/menubar';
import { SplitButton } from 'primereact/splitbutton';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContext';

import './navBar.css'

export const Navbarr = () => {

  const {globalUser, setGlobalUser} = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('log out');
    navigate('/login')
  }

  const items = [
    {label: 'Women', command: () => navigate('/women')},
    {label: 'Men', command: () => navigate('/men')},
    {label: 'Kids', command: () => navigate('/kids')},
    {label: 'Coupons', command: () => navigate('/coupons')},
    {label: 'Admin', command: () => { navigate('/admin')}},
  ];

  const profileButton = [
    {
      label: 'Settings',
      icon: 'pi pi-refresh',
      command: () => { navigate('/settings')}
    },
    {
      label: 'LogOut',
      icon: 'pi pi-refresh',
      command: () => {
        setGlobalUser('')
        navigate('/login')
      }
    },

  ]


  const end =
    <SplitButton
      label={globalUser.name}
      icon="pi pi-user "
      className='p-button-primary p-button-oulined p-button-sm'
      model={profileButton}>
    </SplitButton>


    const start =
    <div>
      <b
        className='mr-6'
        style={{cursor: 'pointer'}}
        onClick={ () => navigate('/home')}
      >
        Clothing store
      </b>
    </div>

  return (
    <>
      <Menubar
        // className='navbar-menubar bg-white text-primary'
        className='navbar-menubar font-bold'
        model={items}
        start={start}
        end={end}
      />
    </>
  )
}
