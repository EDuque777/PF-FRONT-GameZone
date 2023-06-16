//* Rellenar cuando se este realizando el redux e importar los componentes necesarios...
//!APLICAR EL PERSIST
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as act from "../../redux/actions";
import Card from "../../components/Card/Card"
import NavBar from "../../components/NavBar/NavBar";
import styles from "./ShoppingCart.module.css"

//* las cards que vengan del home...
const ShoppingCart = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const cart = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.total)
    //console.log(totalPrice);
    //console.log(cart)

    const handleRemove = () => {
        dispatch(act.clearCart())
    }
    const handleBuy = () => {
        history.push("/buy")
    }
 
    return (
        <div>
            <NavBar />
            <br />
            <h2 className={styles.titleCarrito}>Carrito de Compras</h2>
            <br />
            {cart.length === 0 ? (
                <div className={styles.container}>
                    <div className={styles.juegosContainer}>
                        <div className={styles.cajitaItems}>
                            <div className={styles.emptyCart}> 
                                <p> No hay juegos en el carrito... </p>
                            </div>
                        </div>
                    </div>
                <div className={styles.cajitaResumen}>
                    <div className={styles.cajitaTotal}>
                        <h4>TOTAL: $ {totalPrice} </h4>
                    </div>
                    <div className={styles.botones}>
                        <button className={styles.botonBorrar} onClick={() => {handleRemove()}}>{/* poner icono para borrar todo del carrito */}Borrar</button>
                        <button className={styles.botonComprar}>Comprar</button>
                    </div>
                </div>
            </div>
                
            ) : (
            <div className={styles.container}>
                <div className={styles.juegosContainer}>
                    <div className={styles.cajitaItems}>
                        {cart.map(game => {
                            return (
                                <li className={styles.li} key={game.id} >
                                <Card 
                                id={game.id}
                                name={game.name} 
                                image={game.image}
                                price={game.price}
                                />
                                </li>
                            )})
                        }
                    </div>
                </div>
                <div className={styles.cajitaResumen}>
                    <div className={styles.cajitaTotal}>
                        <h4>TOTAL: ${totalPrice} USD</h4>
                    </div>
                    <div className={styles.botones}>
                        <button className={styles.botonBorrar} onClick={() => {handleRemove()}}>{/* poner icono para borrar todo del carrito */}Borrar</button>
                        <button className={styles.botonComprar} onClick={() => {handleBuy()}}>Comprar</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ShoppingCart;