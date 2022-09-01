import React, { useContext, useState } from 'react'

import { UserContext } from '../../auth/context/UserContext';

import { Menubar } from 'primereact/menubar';
import { SplitButton } from 'primereact/splitbutton';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { CartContext } from '../../clothing/context/CartContext';

export const Navbarr = () => {

  const navigate = useNavigate()
  const { globalUser } = useContext( UserContext )
  const { userCart } = useContext( CartContext )
  // console.log('Navbar ', globalUser);

  console.log("*** ",userCart.numberOfProducts)

  const userOptions =  [
    {icon: 'pi pi-home', command: () => navigate('/home')},
    {icon: 'pi pi-bolt', label: 'Quizz' ,command: () => navigate('/quizz')},
    {label: 'Women', command: () => navigate('/women')},
    {label: 'Men', command: () => navigate('/men')},
    {label: 'Kids', command: () => navigate('/kids')},
    {label: 'Discounts', command: () => navigate('/coupons')},
  ];

  const adminOptions =  [
    ...userOptions,
    {label: 'Admin', command: () => navigate('/admin')},
  ];
  const items = (globalUser.name === "admin") ? adminOptions : userOptions
  // const items = adminOptions
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
        localStorage.clear();
        location.reload();
        navigate('/home')
      }
    },

  ]


  const end =


    // ( userInLocalStorage.name )
    ( globalUser.name )
    ?
      <div>
        <Button
          badge={ userCart.numberOfProducts }
          className='p-button-primary p-button-rounded'
          onClick={() => navigate('/cart')}
        >
          <i className="pi pi-shopping-cart"></i>
        </Button>


        <SplitButton
          label= { globalUser?.name }
          // label= "test"
          icon="pi pi-user "
          className='p-button-primary p-button-text p-button-oulined'
          model={profileButton}>
        </SplitButton>
      </div>
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
    <div>
      <Menubar
        className='navbar-menubar bg-primary '
        // className='navbar-menubar  font-bold'
        model={items}
        start={start}
        end={end}
      />
    </div>
  )
}
