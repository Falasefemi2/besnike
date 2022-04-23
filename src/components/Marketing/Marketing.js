import React from 'react';
import PictureCard from '../common/PictureCard/PictureCard';
import "./Marketing.css";
import monitor from "../../assets/unsplash_21GWwco-JBQ.png"
import laptop from "../../assets/unsplash_5QgIuuBxKwM.png"

const Marketing = () => {
  return (
    <div className="marketing">
        <div className="section__padding section__margin">
            <PictureCard techText="digital marketing" loremText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons" image={monitor} />

            <PictureCard image={laptop} techText="business innovation" loremText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons" businessClass="tech-reverse" paddingClass="try" />
        </div>
    </div>
  )
}

export default Marketing