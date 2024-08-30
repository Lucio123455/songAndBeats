import React, { useState } from 'react';
import { db } from '../../firebase/dbConnection';
import { collection, addDoc } from 'firebase/firestore';
import './AddBeatForm.css'
const AddBeatForm = () => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const [price, setPrice] = useState(''); 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (name && imageUrl && description && audioUrl && price) { 
            try {
                const docRef = await addDoc(collection(db, 'productos'), {
                    name,
                    image: imageUrl,
                    description,
                    audioUrl,
                    price, 
                    isAvailable: true
                });
                setSuccess('Beat subido exitosamente!');
                setName('');
                setImageUrl('');
                setDescription('');
                setAudioUrl('');
                setPrice(''); 
            } catch (e) {
                setError('Error al subir el beat: ' + e.message);
            }
        } else {
            setError('Por favor, completa todos los campos');
        }
    };

    return (
        <div className="add-beat-form">
            <h2>Si eres compositor Sube tu propio Beat</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre del Beat:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">URL de la Imagen:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="audioUrl">URL del Audio:</label>
                    <input
                        type="text"
                        id="audioUrl"
                        value={audioUrl}
                        onChange={(e) => setAudioUrl(e.target.value)}
                    />
                </div>
                <div> 
                    <label htmlFor="price">Precio:</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit">Subir Beat</button>
            </form>
        </div>
    );
};

export default AddBeatForm;
