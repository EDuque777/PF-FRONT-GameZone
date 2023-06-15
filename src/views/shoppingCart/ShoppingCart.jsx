//* Rellenar cuando se este realizando el redux e importar los componentes necesarios...
//! REVISAR COMO HACER QUE SE SUMEN LOS PRECIOS DE LOS PRODUCTOS
//! REVISAR LA DIVISION Y EL RENDER
//! RALIZAR LOS ACTIONS, REDUCER Y APLICAR EL PERSIST
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import Card from "../../components/Card/Card"
import NavBar from "../../components/NavBar/NavBar";

//* las cards que vengan del home...
const ShoppingCart = () => {

    const cart = useSelector(state => state.cart)//? revisar donde se guarda
    const dispatch = useDispatch()

    //! Revisar si remover por id u o de otra forma
    
    return (
        <div>
            !
            <NavBar />
            <br />
            <h2>Carrito de Compras</h2>
            <br />
            {cart.length === 0 ? (
                <p> No hay juegos en el carrito... </p>
            ) : (
                <ul>
                    {cart.map(game => (
                        <li key={game.id} >
                            <Card game={game} />
                        </li>
                        ))}
                </ul>
                
            )}
        </div>
    )
}

export default ShoppingCart;