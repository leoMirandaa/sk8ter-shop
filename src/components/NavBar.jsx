import './navBar.css'
import { useState } from 'react';

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';


export const NavBar = () => {
  const [showSideBar, setshowSideBar] = useState(false)

  let items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Delete', icon: 'pi pi-fw pi-trash'}
  ];

  return (
    <>
      <Toolbar
        left={<Button
                icon="pi pi-align-justify"
                onClick={() => setshowSideBar(true)}
                />
        }
      >
      </Toolbar>

      <Sidebar visible={showSideBar} onHide={() => setshowSideBar(false)}>
        <Menu model={items} />

      </Sidebar>
    </>
  )
}