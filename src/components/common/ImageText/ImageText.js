import React from 'react';
import Button from '../Button/Button';
import "./imagetext.css";

const ImageText = ({image, text, tag, li, dumText, customClasses}) => {
  return (
    <div className={`imageText ${customClasses}`}>
        <div className="image">
        <img src={image} alt=""  />
        </div>
        <div className="text">
        <p className='para-text'>{text}</p>
        <p className='tag'>{tag}</p>
        <li className='li'>{li}</li>
        <li className='li'>{li}</li>
        <li className='li'>{li}</li>
        <p className='dumText'>{dumText}</p>
        <Button buttonText="Learn More" customClasses="image-button" />
        </div>
    </div>
  )
}

export default ImageText