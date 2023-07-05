// import './App.css';
// import React from 'react';
// import { Route, useLocation, Redirect } from 'react-router-dom';
// import { Landing, Home, ShoppingCart, Detail, Whishlist , Form} from "./views";
// import Footer from './components/Footer/Footer';
// import NavBar from './components/NavBar/NavBar';
// import Dashboard from './views/Adm/adm';
// import Search from "./views/Search/Search"
// import Review from './views/Reviews/Reviews';
// import Profile from './views/Profile/Profile';
// import MyGames from './views/MyGames/MyGames';
// import ReviewsModif from './views/Reviews/ReviewsModif';
// import ShoppingView from './views/Profile/ProfileViews/ShoppingView';
// import Terms from './views/FooterViews/Terms and conditions/Terms';
// import AboutUs from './views/FooterViews/About us/AboutUs';
// import Contact from './views/FooterViews/Contact/Contact';
// import {TableDb} from './views/Adm/Tablas/TableGames';
// import Reviews from './views/Adm/Tablas/tableReviews';

// function App() {

//   const location = useLocation()

// return (
//   <div className="App">
//     <head>
//       <script src="https://kit.fontawesome.com/5c35a66fab.js" crossorigin="anonymous"></script>
//     </head>
//     <>
//     {location.pathname !== "/" && location.pathname !== "/dashboard" && location.pathname !== "/TABLA" && <NavBar />}
//       <Route exact path="/" render={() => <Landing/>} />
//       <Route path="/home" render={() => <Home/>}/>
//       <Route path="/cart" render={() => <ShoppingCart/>} /> 
//       <Route path="/login" render={() => <Form/>} /> 
//       <Route exact path="/detail/:id" render={(routeProps) => <Detail {...routeProps} />} />
//       <Route path="/whishlist" render={() => <Whishlist />} />
//       <Route path="/dashboard" render={() => <Dashboard />} />
//       <Route path="/search" render={() => <Search />} />
//       <Route path="/review" render={() => <Review />} />
//       <Route path="/library" render={() => <MyGames />}/>
//       {/* <Route path="/pruebas" render={() => <ShoppingView />}/> */}
//       <Route path="/detail/reviews/:id" render={() => <ReviewsModif />} />
//       <Route path="/user" render={(routeProps) => <Profile {...routeProps} />} />
//       <Route path="/terms" render={() => <Terms />} />
//       <Route path="/aboutus" render={() => <AboutUs />} />
//       <Route path="/contact" render={() => <Contact />} />
//       <Route path="/TABLA" render={() => <TableDb />}/>
//       <Route path="/allreviews" render={() => <Reviews />}/>

//       {location.pathname !== "/dashboard" && <Footer/>}
//     </>
//   </div>
// );}


// export default App;

////////////////////////////////////////////////////////////////////////////////////


// import './App.css';
// import React from 'react';
// import { Route, useLocation, Switch } from 'react-router-dom';
// import { Landing, Home, ShoppingCart, Detail, Whishlist , Form} from "./views";
// import Footer from './components/Footer/Footer';
// import NavBar from './components/NavBar/NavBar';
// import Dashboard from './views/Adm/adm';
// import Search from "./views/Search/Search"
// import Review from './views/Reviews/Reviews';

// import Profile from './views/Profile/Profile';
// import MyGames from './views/MyGames/MyGames';

// import ShoppingView from './views/Profile/ProfileViews/ShoppingView';
// import ChangePassword from './views/Profile/ProfileViews/changePassword';
// import ForgotPassword from './views/Form/ForgotPassword/forgotPassword';
// import PasswordReset from './views/Form/passwordReset/passwordReset';
// import Error from './views/Error/error';

// import Reviews from './views/Adm/Tablas/tableReviews';

// function App() {

//   const location = useLocation()

// return (
//   <div className="App">
//     <head>
//       <script src="https://kit.fontawesome.com/5c35a66fab.js" crossorigin="anonymous"></script>
//     </head>
//     <>
//       {location.pathname !== "/" && location.pathname !== "/dashboard" && <NavBar/>}
//       <Switch>

//         <Route exact path="/" render={() => <Landing/>} />
//         <Route path="/home" render={() => <Home/>}/>
//         <Route path="/cart" render={() => <ShoppingCart/>} /> 
//         <Route path="/login" render={() => <Form/>} /> 
//         <Route exact path="/detail/:id" render={(routeProps) => <Detail {...routeProps} />} />
//         <Route path="/whishlist" render={() => <Whishlist />} />
//         <Route path="/dashboard" render={() => <Dashboard />} />
//         <Route path="/search" render={() => <Search />} />
//         <Route path="/review" render={() => <Review />} />
//         <Route path="/library" render={() => <MyGames />}/>
//         <Route path="/pruebas" render={() => <ShoppingView />}/>
//         <Route path="/segurity" render={() => <ChangePassword/>} />
//         <Route path="/forgotPassword" render={() => <ForgotPassword/>} />
//         <Route exact path="/reset-password/:id/:token" render={() => <PasswordReset/>} />
//         <Route path="/user" render={(routeProps) => <Profile {...routeProps} />} />
//         <Route path="*" render={() => <Error/>} />
//         <Route path="/allreviews" render={() => <Reviews />}/>

//       </Switch>
//       {location.pathname !== "/dashboard" && <Footer/>}
//     </>
//   </div>
// );}

// export default App;



/////////////////////////////////////////////////////

import './App.css';
import React from 'react';
import { Route, useLocation, Redirect } from 'react-router-dom';
import { Landing, Home, ShoppingCart, Detail, Whishlist, Form } from "./views";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './views/Adm/adm';
import Search from "./views/Search/Search"
import Review from './views/Reviews/Reviews';
import Profile from './views/Profile/Profile';
import MyGames from './views/MyGames/MyGames';
import ReviewsModif from './views/Reviews/ReviewsModif';
import ShoppingView from './views/Profile/ProfileViews/ShoppingView';
import Terms from './views/FooterViews/Terms and conditions/Terms';
import AboutUs from './views/FooterViews/About us/AboutUs';
import Contact from './views/FooterViews/Contact/Contact';
import { TableDb } from './views/Adm/Tablas/TableGames';
import Reviews from './views/Adm/Tablas/tableReviews';
import AllReviews from './views/Adm/Tablas/allReviews';

function PrivateRoute({ component: Component, ...rest }) {
  // const isAuthenticated = true; 
  const isAuthenticated = localStorage.getItem('user') !== null;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <head>
        <script src="https://kit.fontawesome.com/5c35a66fab.js" crossorigin="anonymous"></script>
      </head>
      <>
        {location.pathname !== "/" && location.pathname !== "/dashboard" && location.pathname !== "/TABLA" && <NavBar />}
        <Route exact path="/" render={() => <Landing />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/cart" render={() => <ShoppingCart />} />
        <Route path="/login" render={() => <Form />} />
        <Route exact path="/detail/:id" render={(routeProps) => <Detail {...routeProps} />} />
        <PrivateRoute path="/whishlist" render={() => <Whishlist />} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/search" render={() => <Search />} />
        <PrivateRoute path="/review" render={() => <Review />} />
        <Route path="/library" render={() => <MyGames />} />
        {/* <Route path="/pruebas" render={() => <ShoppingView />} /> */}
        <Route path="/detail/reviews/:id" render={() => <ReviewsModif />} />
        <PrivateRoute path="/user" render={(routeProps) => <Profile {...routeProps} />} />
        <Route path="/terms" render={() => <Terms />} />
        <Route path="/aboutus" render={() => <AboutUs />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/TABLA" render={() => <TableDb />} />
        <Route path="/allreview" render={() => <AllReviews />}/>

        {location.pathname !== "/dashboard" && <Footer />}
      </>
    </div>
  );
}

export default App;
