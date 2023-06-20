import './App.css';
import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, ShoppingCart, Detail, Whishlist , Form} from "./views";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';


function App() {

    const location = useLocation()

  return (
    <div className="App">
      <head><script src="https://kit.fontawesome.com/5c35a66fab.js" crossorigin="anonymous"></script></head>
      {location.pathname !== "/" && <NavBar/>}
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
