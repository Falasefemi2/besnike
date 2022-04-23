import React from 'react';
import ImageText from '../common/ImageText/ImageText';
import "./newsletter.css";
import laptop from "../../assets/unsplash_bzqU01v-G54.png"

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="section__padding section__margin">
                <ImageText image={laptop} text="business consulting" tag="looking for  examples of how our business" li="customer experience transformation" dumText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud  and making thugnd qiwkhgyysad vuve y hvhvkuyv amet." customClasses="news" />
            </div>
        </div>
    )
}

export default Newsletter