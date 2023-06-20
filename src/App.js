import './App.css';
import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, ShoppingCart, Detail, Whishlist , Form} from "./views";
import Footer from './components/Footer/Footer';


function App() {

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
