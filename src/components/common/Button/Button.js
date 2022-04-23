import React from 'react';
import "./button.css";

const Button = ({buttonText, customClasses}) => {
  return (
    <div className={`flex__center button-wrapper ${customClasses}`}>
        {buttonText}
    </div>
  )
}

export default Button

// import React from "react";

// const Banner = ({ active, children }) => (
//   <div className={`banner ${active ? "active" : ""}`}>{children}</div>
// );


