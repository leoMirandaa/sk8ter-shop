import React, { useContext } from 'react'

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContext';

export const Navbarr = () => {

  const {globalUser, setGlobalUser} = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('log out');
    navigate('/login')
  }

  const items = [
    {
      label: 'Women',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/women')
    },
    {
      label: 'Men',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/men')
    },
    {
      label: 'Kids',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/kids')
    },
    {
      label: 'Coupons',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/coupons')
    },
    {
      label: 'Admin',
      icon: 'pi pi-refresh',
      command: () => { navigate('/admin')}
    },
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


  const end = <SplitButton
      label={globalUser.name}
      icon="pi pi-user "
      className='p-button-help p-button-rounded'
      // onClick={save}
      model={profileButton}>
    </SplitButton>


    const start =
    <div>
      <b className='mr-6' style={{cursor: 'pointer'}} onClick={ () => navigate('/home')}>
        Clothing store
      </b>
    </div>

  return (
    <>
      <Menubar model={items} start={start} end={end}/>
    </>
  )
}
