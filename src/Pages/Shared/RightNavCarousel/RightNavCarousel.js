import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../../assets/Images/Brand1.png'
import Brand2 from '../../../assets/Images/Brand2.png'
import './RightNavCarousel.css'

const RightNavCarousel = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item className='item'>
                <img
                className="d-block w-100"
                src={Brand1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className="d-block w-100"
                src={Brand2}
                alt="Second slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default RightNavCarousel;