import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import "primereact/resources/themes/fluent-light/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Login } from './Login'
// import { Home } from './Home';
// import { NavBar } from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    {/* <NavBar /> */}
  </React.StrictMode>
)
