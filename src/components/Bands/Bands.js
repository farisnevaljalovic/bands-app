import React from 'react';
import style from "./Bands.module.css";
import Card from "../Card/Card";

function Bands({ bands, readMore }) {
    const allBands = bands.map((band, index) => (
        <Card band={band} key={index} readMore={readMore} />
    ))
     
    return (
        <div className={style.bands}>
            {allBands}
        </div>
    )
}

export default Bands
