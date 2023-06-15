import React from "react";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";

const navBar = () =>{
    return (
<div className={style.container}>
        <Link to="/home"><button className={style.button}>Explore</button></Link>
        <button className={style.button} >Wishlist</button>
        <Link to="/cart"><button className={style.button} >Shopping cart</button></Link>
</div>

    )
}
export default navBar;