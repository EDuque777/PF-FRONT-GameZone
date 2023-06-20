import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
import usuario from "../../assets/usuario.png";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !isSticky) {
        setIsSticky(true);
      } else if (scrollTop === 0 && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const showBackButton = location.pathname !== "/home";
  const showCenteredLogo = !showBackButton;

  return (
    <div className={`${style.container} ${isSticky ? style.sticky : ""}`}>
      {showBackButton && (
        <Link to="/home">
          <button className={style.buttonWish}>Back</button>
        </Link>
      )}
      <Link to="/whishlist">
        <button className={style.buttonWish}>Wishlist</button>
      </Link>
      <div
        className={`${style.logoContainer} ${
          showCenteredLogo ? style.centeredLogo : ""
        }`}
      >
        <Link to="/home" className={style.logoLink}>
          <img className={style.image} src={logoImage} alt="logoimage" />
        </Link>
      </div>
      <Link to="/cart">
        <button className={style.button}>Shopping cart</button>
      </Link>
      <img src={usuario} className={style.usuario} alt="user" />
    </div>
  );
};

export default NavBar;
