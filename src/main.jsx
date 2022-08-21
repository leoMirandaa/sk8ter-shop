import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// import "primereact/resources/themes/saga-purple/theme.css";  //theme
// import "primereact/resources/themes/saga-blue/theme.css";  //theme
import "primereact/resources/themes/tailwind-light/theme.css";  //theme
// import "primereact/resources/themes/bootstrap4-light-purple/theme.css";  //theme
// import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";  //theme
// import "primereact/resources/themes/mdc-light-indigo/theme.css";  //theme
// import "primereact/resources/themes/mdc-light-deeppurple/theme.css";  //theme

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
