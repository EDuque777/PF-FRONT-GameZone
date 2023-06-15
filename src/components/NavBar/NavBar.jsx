import React from "react";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
const navBar = () =>{
    return (
<div className={style.container}>

        <button className={style.button} >Wishlist</button>
        <Link to="/home">
        <img className={style.image} src={logoImage} alt="logoimage" />
        </Link>
        <Link to="/cart"><button className={style.button} >Shopping cart</button></Link>
</div>
    )
}
export default navBar;