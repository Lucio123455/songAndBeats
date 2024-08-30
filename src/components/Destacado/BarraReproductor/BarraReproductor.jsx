import React, { useState, useRef, useEffect } from 'react';
import './BarraReproductor.css';

const BarraReproductor = ({ name, image, audioUrl }) => {
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

    useEffect(() => {
        const audio = audioRef.current;
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audioUrl]);

    return (
        <div className="music-player">
            <div className="song-bar">
                <div className="song-infos">
                    <div className="image-container">
                        <img src={image} alt={name} />
                    </div>
                    <div className="song-description">
                        <p className="title">{name}</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-compress"></i>
                </div>
            </div>
            <div className="progress-controller">
                <div className="control-buttons">
                    <i className="fas fa-random"></i>
                    <i className="fas fa-step-backward"></i>
                    <i className={`play-pause fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} onClick={togglePlay}></i>
                    <i className="fas fa-step-forward"></i>
                    <i className="fas fa-undo-alt"></i>
                </div>
                <div className="progress-container">
                    <span>0:00</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    <span>3:15</span>
                </div>
            </div>
            <div className="other-features">
                <i className="fas fa-list-ul"></i>
                <i className="fas fa-desktop"></i>
                <div className="volume-bar">
                    <i className="fas fa-volume-down"></i>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarraReproductor;






