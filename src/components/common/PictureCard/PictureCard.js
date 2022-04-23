import React from 'react';
import "./picturecard.css";

const PictureCard = ({businessText, techText, loremText, image, businessClass, paddingClass}) => {
  return (
    <div className="pictureCard">
        <div className={`businesscard-1 ${businessClass}`}>
            <div className={`businesscard-text ${paddingClass}`}>
                <div className="pink-text">{businessText}</div>
                <div className="businessBlue">{techText}</div>
                <p className="grayText">{loremText}</p>
                </div>
                <div className="image-business-container">
                <img src={image} alt="" className='business-img' />
                </div>
        </div>
    </div>
  )
}

export default PictureCard