import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import "primereact/resources/themes/fluent-light/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { ClothingApp } from './ClothingApp';
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ClothingApp/>
    </React.StrictMode>
  </BrowserRouter>

)
