import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";


const Landing = () => {
    return(
        <div className={styles.container}>
        <h1 className={styles.heading}>GAME ZONE</h1>
        <Link to="/home">
            <button className={styles.button}>INGRESAR</button>
        </Link>
        <h3 className={styles.subHeading}>Descubre la emoción en GAME ZONE. Adquiere los mejores juegos en nuestra tienda en línea. ¡Sumérgete en aventuras inolvidables y desafía tus habilidades!</h3>
       
        </div>
        
    );
}

export default Landing;
