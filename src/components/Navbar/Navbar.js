import React from 'react';
import style from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={style.navbar}>
            <a href='/'>Bands App</a>            
        </nav>
    )
}

export default Navbar
