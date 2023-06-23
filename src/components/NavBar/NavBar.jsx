import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
import usuario from "../../assets/usuario.png";
import { logoutUser } from "../../redux/actions";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

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

    const history = useHistory()
    const dispatch = useDispatch()

    const [ conteo, setConteo ] = useState(0)

    console.log(conteo)

    //console.log(Cookies.getJSON("token"))

    const datosUser =  JSON.parse(localStorage.getItem("user"));

    const validationUser = () => {
        if (!datosUser) {
            setConteo(0)
        }else if (datosUser){
            setConteo(1)
            return datosUser
        }
    }

    console.log(datosUser)

    useEffect(() => {
        validationUser()
    }, [datosUser])

    const removerDatos = async () => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Closed session'
        })

        await localStorage.removeItem("user");
        await Cookies.remove("token")
        await dispatch(logoutUser())

        history.push("/")

        console.log("datos removidos")
    }

    return (
        <div className={`custom-navbar ${isNavbarFixed ? style.fixedNavbar : ""}`}>
            <Link to="/home">
                <img className={style.img} src={logoImage} width="300px" alt="Logo" />
            </Link>
            <ul className={style.NaV}>

                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
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
                                    <Link to="/login">Log Out</Link>
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


