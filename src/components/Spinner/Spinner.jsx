// src/components/Spinner/Spinner.jsx
import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './Spinner.css';
const Spinner = () => {
  return (
    <div className="spinner-container">
      <TailSpin
        height="80"
        width="80"
        color="#3498db"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Spinner;


