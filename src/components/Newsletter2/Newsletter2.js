import React from 'react';
import ImageText from '../common/ImageText/ImageText';
import './newsletter2.css';
import people from "../../assets/unsplash_DPWCpOzx8SA.png"

const Newsletter2 = () => {
  return (
    <div className="newsletter2">
        <div className="section__margin section__padding">
        <ImageText text="business consulting" tag="increase business value and stay relevant" li="improving customer retention" dumText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud  and making thugnd qiwkhgyysad vuve y hvhvkuyv amet." image={people} customClasses="reverse" />
        </div>
    </div>
  )
}

export default Newsletter2