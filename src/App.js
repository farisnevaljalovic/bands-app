import React, { useEffect, useState } from 'react';
import Bands from './components/Bands/Bands';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import "./style.css";

function App() {
    const [bands, setBands] = useState([]);
    const [curentBand, setCurentBand] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
            .then(res => res.json())
            .then(data => setBands(data))
    }, [])

    const readMore = (band) => {
        setCurentBand(band)
        setShow(true);
    }
    return (
        <div className='App'>
            <Navbar />
            <Bands bands={bands} readMore={readMore} />
            {show && <Modal setShow={setShow} band={curentBand}/>} 
        </div>
    )
}

export default App
