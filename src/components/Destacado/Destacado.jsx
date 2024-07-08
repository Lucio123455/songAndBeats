import React from 'react';
import './Destacado.css';
import DestacadoVideo from '../../assets/DestacadoUno.mp4'; // Asegúrate de tener la ruta correcta
import TituloEfecto from './TituloEfecto/TituloEfecto.jsx'
import BarraReproductor from './BarraReproductor/BarraReproductor.jsx';
import {  instrumentales } from '../../mock/mockData.js';

const Destacado = () => {
    const currentSong = instrumentales[0];

    return (
        <section className="destacado">
            <video autoPlay loop muted className="video">
                <source src={DestacadoVideo} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
            <h3 className='section-title'><TituloEfecto></TituloEfecto></h3>
            <div className='barra-reproductor'>
            <BarraReproductor song={currentSong} />

            </div>
            
        </section>
    );
};

export default Destacado;

