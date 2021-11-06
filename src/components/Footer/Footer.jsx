import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div id="contact" className={styles.container}>
            <div className={styles.details}>
                <a className={styles.icon} rel="noreferrer" href="https://www.linkedin.com/in/venkata-sai-tanish-jonnadula-330341196/" target="_blank"><i className="fab fa-linkedin fa-2x"></i> </a>
                <a className={styles.icon} rel="noreferrer" href="https://www.github.com/venkatasaitanish/" target="_blank"><i className="fab fa-github fa-2x"></i> </a>
                <a className={styles.icon} rel="noreferrer" href="https://www.instagram.com/venkata.sai.tanish/" target="_blank"><i className="fab fa-instagram fa-2x"></i> </a>
                <a className={styles.icon} rel="noreferrer" href="https://www.facebook.com/jonnadula.venkatasaitanish/" target="_blank"><i className="fab fa-facebook fa-2x"></i> </a>
            </div>

            <div className={styles.details}>
                <a className={styles.icon} href="mailto: venkatasaitanish@gmail.com"><i className="fas fa-envelope fa-lg"></i> venkatasaitanish@gmail.com</a>
            </div>

            <div className={styles.details}>
                <a className={styles.icon} href="#home"><i className="fas fa-phone fa-lg"></i> 9515421190</a>
            </div>

        </div>
    )
}

export default Footer;