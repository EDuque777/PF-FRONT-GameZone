import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import {faLinkedin,faGithub,faTwitter,faInstagram,faFacebook} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-section"]}>
                <div className={styles["footer-column"]}>
                    <h7>Compania</h7>
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
            </div>



    
            <div className={styles["footer-section"]}>
            <div className={styles["footer-column"]}>
                <a href="/terminos">
                    <h7>Terminos y condiciones</h7>
                </a>
                <a href="/privacidad">
                    <p>Privacidad</p>
                </a>
                <a href="/seguridad">
                    <p>Seguridad</p>
                </a>
            </div>
        </div>
        <div className={styles["footer-section"]}>
                <div className={styles["footer-column"]}>
                    <h7>Siguenos</h7>
                    <div className={styles["social-media-icons"]}>
                        <FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} size="l"/>
                        <FontAwesomeIcon className="w-6 h-6" icon={faGithub} size="l"/>
                        <FontAwesomeIcon icon={faTwitter} size="l" />
                        <FontAwesomeIcon icon={faFacebook} size="l"/>
                        <FontAwesomeIcon icon={faInstagram} size="l"/>
            
                    </div>
                </div>
            </div>
        </div>
        
    );
}


export default Footer;
