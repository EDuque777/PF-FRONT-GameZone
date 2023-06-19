import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import logoImage from "../../assets/LOGOGAMEZONE.png";

const Landing = () => {
    return(
        <div className={styles.container}>
        <img src={logoImage} alt="GAME ZONE" className={`${styles.logo} ${styles.enlarged}`} />
        <Link to="/home">
            <button className={styles.button}>INGRESAR</button>
        </Link>
        <h1 className={styles.subHeading}>Descubre la emoción en GAME ZONE. Adquiere los mejores juegos en nuestra tienda en línea. ¡Sumérgete en aventuras inolvidables y desafía tus habilidades!</h1>
        </div>
        
    );
}

export default Landing;
