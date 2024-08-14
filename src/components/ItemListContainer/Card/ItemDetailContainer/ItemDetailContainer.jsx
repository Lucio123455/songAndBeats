// src/components/CardDetail/CardDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { instrumentales } from '../../../../mock/mockData.js';
import './CardDetail.css'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const instrumental = instrumentales.find(item => item.id === parseInt(id));

  return (
    <div className="card-detail">
      <img src={instrumental.image} alt={instrumental.name} />
      <h2>{instrumental.name}</h2>
      <p>{instrumental.description}</p>
      <audio controls src={instrumental.audioUrl}></audio>
    </div>
  );
};

export default ItemDetailContainer;
