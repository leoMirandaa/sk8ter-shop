import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

import "primereact/resources/themes/fluent-light/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Login } from './Login'
import { Home } from './Home';
import { Settings } from './Settings';
// import { NavBar } from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/> } />
    <Route path="/home" element={<Home/> } />
    <Route path="/login" element={<Login/> } />
    <Route path="/settings" element={<Settings/> } />
  </Routes>

    <React.StrictMode>
      {/* <Login /> */}
      {/* <NavBar /> */}
      {/* <Home /> */}
    </React.StrictMode>
  </BrowserRouter>

)
