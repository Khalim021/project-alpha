import React from 'react';
import ReactDOM from 'react-dom/client';

// import main component 
import App from './App';

// import scss 

// import css
import "./css/style.css";

// import boxicons
import "boxicons/css/boxicons.min.css"

// import BrowserRouter 
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


