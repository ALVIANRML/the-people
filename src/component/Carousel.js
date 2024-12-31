import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/MyCarousel.css'
import main1 from'../../src/main_site1.png'
import mix from  '../img/mix.png'

const MyCarousel = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={main1}
          alt="First slide"
          style={{ height: '79vh', objectFit: 'cover' }}
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={mix}
          alt="Second slide"
          style={{ height: '79vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Second Slide Title</h3>
          <p>This is the description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={mix}
          alt="Third slide"
          style={{ height: '79vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Third Slide Title</h3>
          <p>This is the description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
