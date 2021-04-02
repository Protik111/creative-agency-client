import React from 'react';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import '../MainHeader/MainHeader.css';

const MainHeader = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
            <div className="containers">
                <div>
                    <h5 className="text-center pt-5"><span style={{color: 'white'}}>Here are some of</span> <span style={{color: '#7AB259'}}>our works</span></h5>
                </div>
                <Slider {...settings} className="carousel-container pt-5 pb-5" style={{border: 'none'}}>
                    
                <div>
                    <img class="rounded mx-auto d-block" src={carousel1} alt=""/>
                </div>
                <div>
                    <img class="rounded mx-auto d-block" src={carousel2} alt=""/>
                </div>
                <div>
                    <img class="rounded mx-auto d-block" src={carousel3} alt=""/>
                </div>
                </Slider>
            </div>
    );
};

export default MainHeader;