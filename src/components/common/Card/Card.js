import React from 'react';
import Button from '../Button/Button';
import "./card.css";

const Card = ({ image, cardText, pTag }) => {
    return (
        <div className="card">
            <div className="card-circle">
            <img src={image} alt="" />
            </div>
            <p className='card-text'>{cardText}</p>
            <p className='p-text'>{pTag}</p>
            <Button buttonText="Learn More" customClasses="card-button"  />
        </div>
    )
}

export default Card