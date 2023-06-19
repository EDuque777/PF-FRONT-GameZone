import './App.css';
import axios from 'axios';
import React from 'react';
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';



import { Landing, Home, ShoppingCart, Detail, Whishlist , Form} from "./views";

import Footer from './components/Footer/Footer';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <head><script src="https://kit.fontawesome.com/5c35a66fab.js" crossorigin="anonymous"></script></head>
      <>
      <Route exact path="/" render={() => <Landing/>} />
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/cart" render={() => <ShoppingCart/>} /> 

      <Route path="/form" render={() => <Form/>} /> 
      

      <Route exact path="/detail/:id" render={(routeProps) => <Detail {...routeProps} />} />
      <Route path="/whishlist" render={() => <Whishlist />} />

      <Footer/>
      </>
      

    </div>
  );
  
}

export default App;
