import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

import {faLinkedin,faGithub,faTwitter,faInstagram,faFacebook, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return(
        <div className={style.container}>

            <div className={style.containerImage}>

            </div>

            <div className={style.section}>
            
                    <a href="/terms">
                        <p>Terms and conditions</p>
                    </a>
                    <a href="/aboutus">
                        <p>About us</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                    <div className={style.socialMediaIcons}>
                        <p>Follow us</p>
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                        <FontAwesomeIcon icon={faFacebook} size="xl"/>
                        <FontAwesomeIcon icon={faInstagram} size="xl"/>

                    </div>

            
        </div>


        </div>
        
    );
}


export default Footer;
