import React from "react";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
const navBar = () =>{
    return (
<div className={style.container}>

        <Link to="/home">
        <img className={style.image} src={logoImage} alt="logoimage" />
        </Link>
        <button className={style.button} >Wishlist</button>
        <Link to="/cart"><button className={style.button} >Shopping cart</button></Link>
</div>
    )
}
export default navBar;