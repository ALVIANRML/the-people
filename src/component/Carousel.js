import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/MyCarousel.css'
import main1 from'../../src/img/carousel/main_site1.png'
import main2 from'../../src/img/carousel/main_site2.png'
import main3 from'../../src/gif/gif_main.GIF'

const MyCarousel = () => {
  return (
    <Carousel 
    className="custom-carousel" 
    interval={3000}
    indicators={true} /* Tampilkan indikator */
    controls={true} /* Tampilkan tombol next/prev */
    fade={true} /* Atur animasi transisi */
    >
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
          src={main2}
          alt="Second slide"
          style={{ height: '79vh', objectFit: 'cover' }}
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={main3}
          alt="Second slide"
          style={{ height: '79vh', objectFit: 'cover' }}
        />
       
      </Carousel.Item>

      
    </Carousel>
  );
};

export default MyCarousel;
