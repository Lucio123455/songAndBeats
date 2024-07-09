import React, { useState, useRef } from 'react';
import './Card.css';

const Card = ({ image, title, description, audioUrl }) => {
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
                        <div className="add-to-cart" >
                            Agregar
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;




