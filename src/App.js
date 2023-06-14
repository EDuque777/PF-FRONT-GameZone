import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import ShoppingCart from './views/shoppingCart/ShoppingCart';


function App() {

  return (
    <div className="App">
      <h1>AAAA</h1>
      <ShoppingCart />
    </div>
  );
  
}

export default App;
