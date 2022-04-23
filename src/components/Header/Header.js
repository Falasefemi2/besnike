import React from 'react';
import "./header.css";
import circle from "../../assets/Ellipse 275.png";
import circle2 from "../../assets/Ellipse 279.png"
import girl from "../../assets/unsplash_Kt-E_Qq8DW4.png"
import Button from '../common/Button/Button';

const Header = () => {
    return (
        <div className="header">
            <div className="section__padding header__content">
                <div className="header__main-1">
                    <div className="img-circle">
                        <img src={circle} alt="" />
                    </div>
                    <div className="header__main-text">
                        Together we can envision your business
                    </div>
                    <div className="header__main-p">
                        Our business consultanting services can help you adapt to todays market dynamics
                    </div>
                    <div className="button">
                        <Button buttonText="Talk to an expert" customClasses="button-2" />
                        <Button buttonText="How it works" customClasses="button-1" />
                    </div>
                </div>
                <div className="header__main-2">
                    <div className="small-cicrle">
                        <img src={circle2} alt="" />
                    </div>
                    <div className="girl">
                        <img src={girl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header