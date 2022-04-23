import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar section__padding">
        <div className="navbar__logo">Besnike</div>
        <ul className="navbar-links">
            <li className="navbar-links-p"><a href="#">Consulting</a></li>
            <li className="navbar-links-p"><a href="#">Industries</a></li>
            <li className="navbar-links-p"><a href="#">Insight</a></li>
            <li className="navbar-links-p"><a href="#">About</a></li>
        </ul>
        <div className="navbar-login">
            <a href="#">Sign In</a>
            <a href="#" className='btn'>Sign Up</a>
        </div>
    </div>
  )
}

export default Navbar