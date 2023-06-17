import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3001/";
//axios.defaults.baseURL = "https://pf-back-gamezone-production.up.railway.app/"

ReactDOM.render(

<React.StrictMode>
<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
  
  document.getElementById('root')
  
);
