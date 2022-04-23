import React from 'react';
import Card from '../common/Card/Card';
import "./herosection.css";
import freinds from "../../assets/3-Friends.png";
import padlock from "../../assets/Vector.png";
import box from "../../assets/Vector-2.png";

const HeroSection = () => {
  return (
    <div className='hero__section'>
        <div className="section__padding section__margin">
            <div className="hero__section-text">
            Consultancy is not limited <br/>to just technical
            </div>
            <div className="card__container">
                <Card image={freinds} cardText="Organisation" pTag="Our business consultanting services can help youarket dynamics"  />
                <Card image={padlock} cardText="private equity" pTag="our business consultanting services can help youarket dynamics" />
                <Card image={box} cardText="sustainability" pTag="our business consultanting services can help youarket dynamics" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection