import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
const  Navbar = () =>{
    return(
        <div className={styles.navBar}>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;
