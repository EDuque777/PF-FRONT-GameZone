//* Rellenar cuando se este realizando el redux e importar los componentes necesarios...
//! RALIZAR LOS ACTIONS, REDUCER Y APLICAR EL PERSIST
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import Card from "../../components/Card/Card"
import NavBar from "../../components/NavBar/NavBar";

//* las cards que vengan del home...
const ShoppingCart = () => {

    const cart = useSelector(state => state.cart)
    console.log(cart);
    const dispatch = useDispatch()

    //! Revisar si remover por id u o de otra forma
    
    return (
        <div>
            <NavBar />
            <br />
            <h2>Carrito de Compras</h2>
            <br />
            {cart.length === 0 ? (
                <p> No hay juegos en el carrito... </p>
            ) : (
                <ul>
                    {cart.map(game => {
                        //console.log(game)
                        return (
                            <li key={game.id} >
                            <Card 
                            name={game.name} 
                            image={game.image}
                            price={game.price}
                            />
                            </li>
                        )})
                    }
                </ul>
                
            )}
        </div>
    )
}

export default ShoppingCart;