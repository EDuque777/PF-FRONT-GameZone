import React from 'react'
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as act from "../../redux/actions";
import fafa from "./Card.module.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//! FIJARSE COMO VIENE
const Card = (props) => {

    console.log(props);
    const {id, price, name, image} = props
    console.log(image);
    
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    
    const handleAdd = () => {
        dispatch(act.addCart())
    }
    const handleRemove = (gameId) => {
        dispatch(act.removeCart(gameId))
    }
    const handleClick = (id) => {
        history.push(`/detail/${id}`);
    }

    const isShoppCartRoute = location.pathname === "/cart";

  return (
        <li className={fafa.box} >
            <div onClick={() => {handleClick(id)}}>
                <img src={image} alt={name} width="150px" height="38px" ></img>
                <h1 >{name}</h1>
                <h3>{price}</h3>
            </div>
            {!isShoppCartRoute ? (
                    <button onClick={() => {handleAdd()}}> Add to cart </button>
            ) : (
                <button onClick={() => handleRemove(id)}>Sacar</button>
            )}
        </li>
    )
}

export default Card