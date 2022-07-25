import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import { Route, Routes } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import './navBar.css'
import { Settings } from '../Settings';

export const NavBar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      console.log('handle click..');
      navigate("/settings")
    }

    const items = [
        {
            label: 'Women',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Men',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
            ]
        },
        {
            label: 'Kids',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
            ]
        },
        {
            label: 'Accessories',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                },
            ]
        },
        {
            label: 'Trends',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    // const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const start = <span className='font-bold'> Shop store |</span>;
    const end =
      <Button
        className='p-button-rounded p-button-outlined'
        icon="pi pi-user"
        tooltip="Settings"
        tooltipOptions={{position: 'bottom'}}
        onClick={ handleClick }
      />
;

    return (
        <div>
            <div className="card">
                <Menubar className='shadow-2' model={items}  start={start} end={end} />
            </div>

            <Routes>
              <Route path="/settings" element={<Settings/>} />
            </Routes>
        </div>
    );
}