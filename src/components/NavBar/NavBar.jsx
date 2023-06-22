import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
import usuario from "../../assets/usuario.png";

const NavBar = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const handleSubMenuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isFixed = window.pageYOffset > 0;
            setIsNavbarFixed(isFixed);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`custom-navbar ${isNavbarFixed ? style.fixedNavbar : ""}`}>
            <Link to="/home">
                <img className={style.img} src={logoImage} width="300px" alt="Logo" />
            </Link>
            <ul className={style.NaV}>
                <li className={style.NaV}>
                    <Link to="/home">Home</Link>
                    <Link to="/cart">Shopping Cart</Link>
                </li>
                <li>
                    <div className={style.usuarioContainer}>
                        <img
                            src={usuario}
                            className={style.usuario}
                            alt="user"
                            onClick={handleSubMenuToggle}
                        />
                        {isSubMenuOpen && (
                            <ul className={style.submenu}>
                                <li className={style.modules}>
                                    <Link to="">Perfil</Link>
                                </li>
                                <li>
                                    <Link to="/whishlist">Wish List</Link>
                                </li>
                                <li>
                                    <Link to="/form">Log Out</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

 export default NavBar; 


