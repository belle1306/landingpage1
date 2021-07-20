import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images1 from "./assets/images1.jpg";
import images2 from "./assets/images2.jpg";
import images3 from "./assets/images3.jpg";

class Carouselslider extends Component {
    render() {
        return (
            <Carousel>
                <div>C:\users\Lenovo\landingpage1\go\src\assets\images2.jpg
                    <img src={images1} alt="images1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={images2} alt="images2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={images3} alt="images3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
export default Carouselslider

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
