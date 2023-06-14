//* Rellenar cuando se este realizando el redux e importar los componentes necesarios...
//! REVISAR COMO HACER QUE SE SUMEN LOS PRECIOS DE LOS PRODUCTOS
//! REVISAR LA DIVISION Y EL RENDER
//! RALIZAR LOS ACTIONS, REDUCER Y APLICAR EL PERSIST
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import Card from "../../components/Card/Card"

//* las cards que vengan del home...
const ShoppingCart = () => {

    const cart = useSelector(state => state.cart)//? revisar donde se guarda 
    const dispatch = useDispatch()

    //! Revisar si remover por id u o de otra forma
    const handleRemove = (gameId) => {
        dispatch(act.removeCart())
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p> No hay juegos en el carrito... </p>
            ) : (
                <ul>
                    {cart.map(game => (
                        <li>
                            <Card game={game} />
                            <button onClick={handleRemove(game.id)} > Sacar </button>
                        </li>
                        //<Card key={game.id} name={game.name} price={game.price} />
                        ))}
                </ul>
                
            )}
        </div>
    )
}

export default ShoppingCart;