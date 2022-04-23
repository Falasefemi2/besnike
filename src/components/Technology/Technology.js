import React from 'react';
import PictureCard from '../common/PictureCard/PictureCard';
import "./technology.css";
import work from '../../assets/unsplash_ZPeXrWxOjRQ.png'
import man from "../../assets/unsplash_8YG31Xn4dSw.png"

const Technology = () => {
    return (
        <div className="technology">
            <div className="section__margin section__padding technology-container">
                <PictureCard businessText="business consulting" techText="using innovation and distruptive technology" loremText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud  and making thugnd qiwkhgyysad vuve y hvhvkuyv amet." image={work} />

                <PictureCard image={man} techText="faster business" loremText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons" businessClass="tech-reverse" paddingClass="try" />

            </div>
        </div>
    )
}

export default Technology