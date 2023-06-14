import './App.css';
import axios from 'axios';
import React from 'react';
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { Landing, Home, ShoppingCart } from "./views";

function App() {

  const location = useLocation();

  return (
    <div className="App">

      <Route exact path="/" render={() => <Landing/>} />
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/cart" render={() => <ShoppingCart/>} /> 
      <Footer/>

    </div>
  );
  
}

export default App;
