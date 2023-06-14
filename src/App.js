import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Footer from './components/Footer/Footer';

import { Landing, Home } from "./views";

// import React from "react";


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <>
      <Route exact path="/" render={() => <Landing/>} />
      <Route path="/home" render={() => <Home/>}/>
      <Footer/>
      </>
    </div>
  );
  
}

export default App;
