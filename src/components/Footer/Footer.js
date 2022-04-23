import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="section__padding section__margin footer__container">
            <div className="footer__text">
                <div className="footer__text-first">besnike</div>
                <p className="footer__text-p">Robust credit scoring model designed to allocate appropriate loan offers.</p>
            </div>
            <div className="footer__company">
                <div className="footer__company-first">Company</div>
                <div className="footer__company-small-text">Privacy Policy</div>
                <div className="footer__company-small-text">Term of Use</div>
                <div className="footer__company-small-text">License</div>
            </div>
            <div className="footer__address">
                <div className="footer__address-text">Address</div>
                <div className="footer__adress-name">10, Sule Abuka Opebi, Ikeja. Lagos</div>
            </div>
        </div>
    </div>
  )
}

export default Footer