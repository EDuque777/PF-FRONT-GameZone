import React from 'react'
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import * as act from "../../redux/actions";
import style from "./Card.module.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Card = (props) => {

    const {id, price, name, image} = props
    
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const cart = useSelector(state => state.cart)
    const whishList = useSelector(state => state.whishList)
    const isShoppCartRoute = location.pathname === "/cart";
    const isWhishListRoute =location.pathname === "/whishlist";
    const wholePart = Math.floor(price / 100);
    const partDecimal = (price % 100).toString().padStart(2, '0');
    const formattedNumber = parseFloat(`${wholePart}.${partDecimal}`);
    //console.log(formattedNumber);

    const handleAdd = () => {
        const cartList = cart.find( game => game.id === id)
        if (cartList) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'el juego ya se encuentra en el carrito',
                showConfirmButton: false,
                timer: 2000
               }) 
            //alert("el producto ya se encuentra en la lista")
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Juego agregado correctamente",
                showConfirmButton: false,
                timer: 2000
            })
            dispatch(act.addCart({ id, price: formattedNumber, name, image }))
        }   
    }
    const handleAddWhish = () => {
        const gameInWhishList = whishList.find(game => game.id === id)
        if(gameInWhishList) {
           Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'el juego ya se encuentra en la lista',
                showConfirmButton: false,
                timer: 2000
           }) 
           //alert("el producto ya se encuentra en la lista")
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Juego agregado correctamente",
                showConfirmButton: false,
                timer: 2000
            })
            dispatch(act.addWhishList({ id, price: formattedNumber, name, image }))
        }
    }
    const handleRemove = () => {
        dispatch(act.removeCart(id))
    }
    const handelRemoveWhishList = () => {
        dispatch(act.removeWhishList(id))
    }
    const handleClick = (id) => {
        history.push(`/detail/${id}`);
    }

    return (
        <li className={style.box} key={id}>
            <div onClick={() => {handleClick(id)}}>
                <img className={style.image} src={image} alt={name} width="150px" height="38px" ></img>
                <h1 className={style.name}>{name}</h1>
            </div>
                <h3 className={style.price}> {formattedNumber} </h3>
            {!isShoppCartRoute && !isWhishListRoute && (
                //! tiene que estar primero en la whishlist y despues al shop
                <div>
                    <button onClick={() => {handleAddWhish()}}>Add to WhishList</button>
                    <button onClick={() => {handleAdd()}}>Add to cart</button>
                </div>
            )}
            {isWhishListRoute && (
                <div>
                    <button onClick={() => {handleAdd()}}>Add to cart</button>
                    <button onClick={() => {handelRemoveWhishList()}}>Take out</button>
                </div>
            )}
            {isShoppCartRoute && (
                <button onClick={() => {handleRemove()}}>Take out</button>
            )} 
        </li>
    )
}

export default Card