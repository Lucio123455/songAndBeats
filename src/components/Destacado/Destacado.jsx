import React, { useState, useEffect } from 'react';
import './Destacado.css';
import DestacadoVideo from '../../assets/DestacadoUno.mp4'; 
import TituloEfecto from './TituloEfecto/TituloEfecto.jsx';
import BarraReproductor from './BarraReproductor/BarraReproductor.jsx';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Destacado = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const db = getFirestore();
  
  useEffect(() => {
    const fetchSong = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const songs = querySnapshot.docs.map(doc => doc.data());
        if (songs.length > 0) {
          setCurrentSong(songs[0]); 
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSong();
  }, [db]);

  if (!currentSong) {
    return <p>Loading...</p>; 
  }

  return (
    <section className="destacado">
      <video autoPlay loop muted className="video">
        <source src={DestacadoVideo} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <h3 className='section-title'><TituloEfecto /></h3>
      <div className='barra-reproductor'>
        <BarraReproductor 
          name={currentSong.name} 
          image={currentSong.image} 
          audioUrl={currentSong.audioUrl} 
        />
      </div>
    </section>
  );
};

export default Destacado;


