import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
import usuario from "../../assets/usuario.png";
import { logoutUser, getDataGoogle, logoutGoogle } from "../../redux/actions";
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

    const google = useSelector((state) => state.userGoogle)

    const [ conteo, setConteo ] = useState(0)
    const [ conteoTwo, setConteoTwo ] = useState(0)

    useEffect(() => {
        if (google) {
            console.log(google, "estos datos son del Navbar")
            localStorage.setItem("userTwo", JSON.stringify(google));
            setConteoTwo(1)
        }else{
            setConteoTwo(0)
            console.log("no hay datos")
        }
    }, [google])

    console.log(conteoTwo, "esto es de google")

    //console.log(conteo)

    //console.log(Cookies.getJSON("token"))

    const datosUser = JSON.parse(localStorage.getItem("user"));

    const validationUser = () => {
        if (!datosUser) {
            setConteo(0)
        } else if (datosUser) {
            setConteo(1)
            return datosUser
        }
    }

    const datosUserTwo = JSON.parse(localStorage.getItem("userTwo"));

    console.log(datosUserTwo, "estos datos son del local")

    const validationUserGoogle = () => {
        //const datosUserTwo = JSON.parse(localStorage.getItem("userTwo"));
        if (!datosUserTwo) {
            setConteoTwo(0)
        }else if (datosUserTwo) {
            setConteoTwo(1)
            return datosUserTwo
        }
    }

    //console.log(datosUser)

    useEffect(() => {
        validationUser()
    }, [datosUser])

    useEffect(() => {
        validationUserGoogle()
    }, [datosUserTwo])

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

    const removerDatosTres = async () => {
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

        await localStorage.removeItem("userTwo");
        await dispatch(logoutGoogle())

        console.log("datos removidos de google")
    }

    function peticionData() {
        dispatch(getDataGoogle())
        console.log("peticones de datos")
    }

    useEffect(() => {
        if (datosUserTwo) {
            console.log("hay datos")
        }else{
            peticionData()
        }

    }, [])

    return (
        <div className={`custom-navbar ${isNavbarFixed ? style.fixedNavbar : ""}`}>
            <Link to="/home">
                <img className={style.img} src={logoImage} width="300px" alt="Logo" />
            </Link>
            <ul className={style.NaV}>

                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li className={style["submenu-item"]}>
                    <Link to="/cart" className={style["submenu-link"]}>
                        <i className={`fa fa-shopping-cart ${style["cart_icon"]}`}></i>
                    </Link>
                </li>

                {
                    conteoTwo > conteo ? (
                        conteoTwo > 0 ? (
                            <li>
                                <div className={style.usuarioContainer}>
                                    <img
                                        src={datosUserTwo.user.profileImage}
                                        className={style.usuario}
                                        alt=""
                                        title={datosUserTwo.user.name}
                                        onClick={handleSubMenuToggle}
                                    />
                                    {isSubMenuOpen && (
                                        <ul className={style.submenu}>
                                            <li>
                                                <Link to="#" >{datosUserTwo.user.name}</Link>
                                                <Link to="">Perfil</Link>
                                                <Link to="/whishlist">Wish List</Link>
                                                <a onClick={removerDatosTres}>Log Out</a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ) : (
                            <Link to="/form"><button className={style.button} >login</button></Link>
                        )
                    ) : (
                        conteo > 0 ? (
                            <li>
                                <div className={style.usuarioContainer}>
                                    <img
                                        src={datosUser.profileImage}
                                        className={style.usuario}
                                        alt={datosUser.name}
                                        title={datosUser.name}
                                        onClick={handleSubMenuToggle}
                                    />
                                    {isSubMenuOpen && (
                                        <ul className={style.submenu}>
                                            <li>
                                                <Link to="#" >{datosUser.user_name}</Link>
                                                <Link to="">Perfil</Link>
                                                <Link to="/whishlist">Wish List</Link>
                                                <a onClick={removerDatos}>Log Out</a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ) : (
                            <Link to="/form"><button className={style.button} >login</button></Link>
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default NavBar;

