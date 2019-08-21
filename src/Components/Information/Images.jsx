import React from 'react';
import './Images.scss';
import { Slide } from 'react-slideshow-image';



const slideImages = [
    "https://www.riyadhgolfcourses.com/images/thumbs/slideshow/riyadh/958x410/0-0-0-0/1/38_104.jpg",
    "https://www.riyadhgolfcourses.com/images/thumbs/slideshow/riyadh/958x410/0-0-0-0/1/38_102.jpg",
    "https://www.riyadhgolfcourses.com/images/thumbs/slideshow/riyadh/958x410/0-0-0-0/1/38_101.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

 const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div className="img-slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span> </span>
          </div>
        </div>
        <div className="each-slide">
          <div className="img-slide" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span></span>
          </div>
        </div>
        <div className="each-slide">
          <div className="img-slide" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span></span>
          </div>
        </div>
      </Slide>
    )
}
 
export default Slideshow