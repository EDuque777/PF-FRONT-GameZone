import React from 'react'
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as act from "../../redux/actions";
import style from "./Card.module.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//! FIJARSE COMO VIENE
const Card = (props) => {

    const {id, price, name, image} = props
    
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    
    const handleAdd = () => {
        dispatch(act.addCart({ id, price, name, image }))
    }
    const handleRemove = (id) => {
        dispatch(act.removeCart(id))
    }
    const handleClick = (id) => {
        history.push(`/detail/${id}`);
    }

    const isShoppCartRoute = location.pathname === "/cart";

    return (
        <li className={style.box} >
            <div onClick={() => {handleClick(id)}}>
                <img className={style.image} src={image} alt={name} width="150px" height="38px" ></img>
                <h1 className={style.name}>{name}</h1>
                <h3 className={style.price}> ${price}</h3>
            </div>
            {!isShoppCartRoute ? (
                //! tiene que estar primero en la whishlist y despues al shop
                <button onClick={() => {handleAdd()}}>Add to cart</button>
            ) : (
                //! y el boton tienen que estar en ambas, tanto tienda como whish
                <button onClick={() => {handleRemove(id)}}>Sacar</button>
            )}
        </li>
    )
}

export default Card