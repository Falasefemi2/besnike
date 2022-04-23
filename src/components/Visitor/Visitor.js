import React from 'react';
import Button from '../common/Button/Button';
import "./visitor.css";

const Visitor = () => {
  return (
    <div className="visitor">
        <div className="section__padding section__margin visitor__container">
            <div className="visitor-text">
                <div className="customer-text">
                turn  your visitors into customers
                </div>
                <p className="dynamics">our business consultanting services can help youarket dynamics</p>
                <div className="visitor-btn">
                    <Button buttonText="Learn more" customClasses="button-1" />
                </div>
            </div>
            <div className="software">
                <div className="heading-text">modern softerware</div>
                <p className="software-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons</p>
                <div className="visitor-btn">
                <p className="end">chnaging mindset</p>
                </div>
            </div>
            <div className="organisation">
                <div className="heading-text">build organisation</div>
                <div className="software-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons</div>
                <div className="visitor-btn">
                    <div className="heading-text">faster business</div>
                    <p className="software-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Visitor