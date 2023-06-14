import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/fbimg.png";
import twitter from "../../assets/twitterimg.png";
import linkedin from "../../assets/linkedinimg.png";
import insta from "../../assets/instaimg.png";
import styles from "./Footer.module.css";

const Footer = () => {
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-section"]}>
                <div className={styles["footer-column"]}>
                    <h4>Compania</h4>
                    <a href="/aboutus">
                        <p>Sobre nosotros</p>
                    </a>
                    <a href="/prensa">
                        <p>Prensa</p>
                    </a>
                    <a href="/contacto">
                        <p>Contacto</p>
                    </a>
                </div>
                <div className={styles["footer-column"]}>
                    <h4>Siguenos</h4>
                    <div className={styles["social-media-icons"]}>
                        <p ><img src={fb} alt=""/></p>
                        <p><img src={twitter} alt=""/></p>
                        <p><img src={linkedin} alt=""/></p>
                        <p><img src={insta} alt=""/></p>
                    </div>
                </div>
            </div>

            {/* <hr></hr> */}

            <div className={styles["divider"]}></div>

            <div className={styles["footer-section"]}>
                <a href="/terminos">
                    <p>Terminos y condiciones</p>
                </a>
                <a href="/privacidad">
                    <p>Privacidad</p>
                </a>
                <a href="/seguridad">
                    <p>Seguridad</p>
                </a>
            </div>
        </div>
    );
}

export default Footer;
