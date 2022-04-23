import React from 'react';
import "./solution.css";
import dot from "../../assets/Group 204.png";
import person from "../../assets/unsplash_8F4EX4Nw1yY.png"
import Button from '../common/Button/Button';

const Solution = () => {
    return (
        <div className="solution">
            <div className="section__padding section__margin solution-container">
                <div className="image-container">
                    <div className="image-dot">
                        <img src={dot} alt="" />
                    </div>
                    <div className="image-person">
                        <img src={person} alt="" />
                    </div>
                </div>
                <div className="text-container">
                    <div className="text-tag">perfect solution for small businesses</div>
                    <p className="p-text-tag">our business consultanting services can help youarket dynamics</p>
                    <div className="sol-btn">
                        <Button buttonText="Learn More" customClasses="button-1" />
                        <Button buttonText="Read More" customClasses="button-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution