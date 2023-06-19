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
                    <p>Compania</p>
                    <a href="/aboutus">
                        <p>Sobre nosotros</p>
                    </a>
                    {/* <a href="/prensa">
                        <p>Prensa</p>
                    </a> */}
                    <a href="/contacto">
                        <p>Contacto</p>
                    </a>
                </div>
            </div>



    
            <div className={styles["footer-section"]}>
            <div className={styles["footer-column"]}>
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
        <div className={styles["footer-section"]}>
                <div className={styles["footer-column"]}>
                    <p>Siguenos</p>
                    <div className={styles["social-media-icons"]}>
                        <FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} size="xl"/>
                        <FontAwesomeIcon className="w-6 h-6" icon={faGithub} size="xl"/>
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                        <FontAwesomeIcon icon={faFacebook} size="xl"/>
                        <FontAwesomeIcon icon={faInstagram} size="xl"/>
            
                    </div>
                </div>
            </div>
        </div>
        
    );
}


export default Footer;
