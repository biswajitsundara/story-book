import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ imageSrc, title, onOk, onCancel }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-footer">
          <button className="card-button card-button-ok" onClick={onOk}>
            OK
          </button>
          <button className="card-button card-button-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
