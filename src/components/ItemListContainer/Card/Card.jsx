// src/components/Card/Card.jsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, image, title, description, audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(audioUrl));

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={image} alt={title} className="card-image" />
                    <h3 className="card-title">{title}</h3>
                </div>
                <div className="card-back">
                    <p>{description}</p>
                    <div className='buttons'>
                        <div className="play-button" onClick={togglePlay}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </div>
                        <Link to={`/card/${id}`} className="add-to-cart">
                            Ver detalles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;




