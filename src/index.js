import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
// import axios from 'axios';

 //axios.defaults.baseURL = "http://localhost:3001/";
<<<<<<< HEAD
  axios.defaults.baseURL = ""; 
=======
  // axios.defaults.baseURL = "";
>>>>>>> 9c0feb061ecb8f78fff57cf99c9b089a59c0e4f5

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

