import React from 'react';
import style from "./Card.module.css";

function Card({ band, readMore }) {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h2>{band.name}</h2>
            </div>
            <div className={style.cardBody}>
                <div className={style.leftBox}>
                    <img src={band.img_url} alt={band.name}></img>
                </div>
                <div className={style.rightBox}>
                    <p>{ band.info.substr(0,190)}...</p>
                </div>
            </div>
            <div className={style.cardFooter}>
                <button onClick={()=> readMore(band)}>Read more</button>
            </div>
        </div>
    )
}

export default Card
