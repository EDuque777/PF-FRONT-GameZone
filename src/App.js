import './App.css';
import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, ShoppingCart, Detail, Whishlist , Form} from "./views";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './views/Adm/adm';
import Search from "./views/Search/Search"
import Review from './views/Reviews/Reviews';



function App() {

    const location = useLocation()

return (
  <div className="App">
    <head>
      <script src="https://kit.fontawesome.com/5c35a66fab.js" crossorigin="anonymous"></script>
    </head>
    <>
      {location.pathname !== "/" && location.pathname !== "/dashboard" && <NavBar/>}
      <Route exact path="/" render={() => <Landing/>} />
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/cart" render={() => <ShoppingCart/>} /> 
      <Route path="/login" render={() => <Form/>} /> 
      <Route exact path="/detail/:id" render={(routeProps) => <Detail {...routeProps} />} />
      <Route path="/whishlist" render={() => <Whishlist />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/search" render={() => <Search />} />
      <Route path="/review" render={() => <Review />} />
      {location.pathname !== "/dashboard" && <Footer/>}
    </>
  </div>
);

      


  
}

export default App;