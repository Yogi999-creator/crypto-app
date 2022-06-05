import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CrptoContext from './CrptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';


ReactDOM.render(
  <React.StrictMode>
    <CrptoContext>
       <App />
    </CrptoContext>
  </React.StrictMode>,
  document.getElementById('root')
);
