//* Rellenar cuando se este realizando el redux e importar los componentes necesarios...
//! RALIZAR LOS ACTIONS, REDUCER Y APLICAR EL PERSIST
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as act from "../../redux/actions";
import Card from "../../components/Card/Card"
import NavBar from "../../components/NavBar/NavBar";

//* las cards que vengan del home...
const ShoppingCart = () => {

    const cart = useSelector(state => state.cart)
    //! Revisar si remover por id u o de otra forma
    return (
        <div>
            <NavBar />
            <br />
            <h2 className="tituloCarrito">Carrito de Compras</h2>
            <br />
            {cart.length === 0 ? (
                <div className=""> 
                    <p> No hay juegos en el carrito... </p>
                </div>
            ) : (
            <div>
                <ul className="cajitaItems">
                    {cart.map(game => {
                        return (
                            <li key={game.id} >
                            <Card 
                            id={game.id}
                            name={game.name} 
                            image={game.image}
                            price={game.price}
                            />
                            </li>
                        )})
                    }
                </ul>
                <div className="cajitaResumen">
                    <div className="cajitaTotal">
                        <h4>TOTAL:</h4>
                    </div>
                    <div className="bottonBorrar">
                        <button>{/* poner icono para borrar todo del carrito */}Borrar</button>
                    </div>
                    <div>
                        <button className="botonComprar">Comprar</button>
                    </div>
                </div>
            </div>

            )}
        </div>
    )
}

export default ShoppingCart;