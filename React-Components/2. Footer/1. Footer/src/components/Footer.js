import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  styles  from './Footer.module.css'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';

export default function Footer(){

    return(
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Row}>
                    <div className={styles.Column}>
                        <h4 className={styles.H4}>company</h4>
                        <ul className={styles.UnorderedList}>
                            <li className={styles.List}><a className={styles.Anchor} href="#">about us</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">our services</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">privacy policy</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className={styles.Column}>
                        <h4 className={styles.H4}>get help</h4>
                        <ul className={styles.UnorderedList}>
                            <li className={styles.List}><a className={styles.Anchor} href="#">FAQ</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">shipping</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">returns</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">order status</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className={styles.Column}>
                        <h4 className={styles.H4}>online shop</h4>
                        <ul className={styles.UnorderedList}>
                            <li className={styles.List}><a className={styles.Anchor} href="#">watch</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">bag</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">shoes</a></li>
                            <li className={styles.List}><a className={styles.Anchor} href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className={styles.Column}>
                        <h4 className={styles.H4}>follow us</h4>
                        <div className="SocialLinks">
                            <a href="#"><FontAwesomeIcon className={styles.Social} icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon className={styles.Social} icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon className={styles.Social} icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon className={styles.Social} icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}