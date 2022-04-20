import React from 'react';
import style from "./Modal.module.css";

function Modal({ setShow, band }) {
    return (
        <div className={style.modal}>
            <div className={style.modalBox}>
                <div className={style.modalHeader}>
                    <h2>{band.name}</h2>
                    <button onClick={()=> setShow(false)}>X</button>
                </div>
                <div className={style.modalBody}>
                    <div className={style.bandImg}>
                        <img src={band.thumb1} alt={band.name} />
                        <img src={band.thumb2} alt={band.name} />
                        <img src={band.thumb3} alt={band.name} />
                    </div>
                    <div className={style.bandInfo}>
                        <p>{band.info}</p>
                    </div>
                </div>
                <div className={style.modalFooter}>
                    <button onClick={()=> setShow(false)}>Close</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modal
