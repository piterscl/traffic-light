import React, { useState } from 'react';

const Semaforo = () => {
    const [rojo, setRojoOn] = useState("rojo");
    const [amarillo, setAmarilloOn] = useState("amarillo");
    const [verde, setVerdeOn] = useState("verde");

    return (
        <div>
            <div id="Semaforo" />
            <div id="container">
                <div className={rojo} onClick={() => (setRojoOn("rojo on") + setAmarilloOn("amarillo") + setVerdeOn("verde"))} />
                <div className={amarillo} onClick={() => (setRojoOn("rojo") + setAmarilloOn("amarillo on") + setVerdeOn("verde"))} />
                <div className={verde} onClick={() => (setRojoOn("rojo") + setAmarilloOn("amarillo") + setVerdeOn("verde on"))} />
            </div>
        </div>
    );
};
export default Semaforo;