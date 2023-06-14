import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import ShoppingCart from './views/shoppingCart/ShoppingCart';

import { Landing, Home } from "./views";


function App() {

  return (
    <div className="App">

      <Route exact path="/" render={() => <Landing/>} />
      <Route path="/home" render={() => <Home/>}/>

    </div>
  );
  
}

export default App;
