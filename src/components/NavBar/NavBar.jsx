import React from "react";
import style from "./NavBar.module.css"

const navBar = () =>{
    return (
<div className={style.container}>
        <button className={style.button}>Explore</button>
        <button className={style.button} >Wishlist</button>
        <button className={style.button} >Shopping cart</button>
</div>

    )
}
export default navBar;