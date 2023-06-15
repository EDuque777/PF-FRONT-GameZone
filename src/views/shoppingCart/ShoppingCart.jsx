//* Rellenar cuando se este realizando el redux e importar los componentes necesarios...
//!APLICAR EL PERSIST
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as act from "../../redux/actions";
import Card from "../../components/Card/Card"
import NavBar from "../../components/NavBar/NavBar";
import styles from "./ShoppingCart.module.css"

//* las cards que vengan del home...
const ShoppingCart = () => {

    const cart = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.total)
    //console.log(totalPrice);
    //console.log(cart)
    return (
        <div>
            <NavBar />
            <br />
            <h2 className={styles.titleCarrito}>Carrito de Compras</h2>
            <br />
            {cart.length === 0 ? (
                <div className={styles.emptyCart}> 
                    <p> No hay juegos en el carrito... </p>
                </div>
            ) : (
            <div>
                <ul className={styles.cajitaItems}>
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
                <div className={styles.cajitaResumen}>
                    <div className={styles.cajitaTotal}>
                        <h4>TOTAL: ${totalPrice} ARG </h4>
                    </div>
                    <div className={styles.botonBorrar}>
                        <button>{/* poner icono para borrar todo del carrito */}Borrar</button>
                    </div>
                    <div>
                        <button className={styles.botonComprar}>Comprar</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ShoppingCart;