import React from "react";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
import usuario from "../../assets/usuario.png"


const navBar = () =>{

return (
    <div className={style.container}>
        <Link to="/whishlist"><button className={style.button} >Wishlist</button> </Link>
        <Link to="/home">
        <img className={style.image} src={logoImage} alt="logoimage" />
        </Link>
        <Link to="/cart"><button className={style.button} >Shopping cart</button></Link>
        <img src={usuario} className={style.usuario} />
    </div>
    )
}
export default navBar;