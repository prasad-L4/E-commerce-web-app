import React from "react";
import Carousel from "react-bootstrap/Carousel";

import './Slide.css'
function Slide() {
  
  return (
    <div>
      <Carousel data-bs-theme="white">
        <Carousel.Item >
            <div className="aspect-ratio-container">
          <img
            className="d-block w-100"
            src='https://www.orientalwatch.com/image.aspx?f=companyactivity/320/edmbanner.jpg&h=624&w=1722'
            alt="First slide"
         
          />
          </div>
          <Carousel.Caption >
            <h5 className=" watch-title">On The Trail Of The Original</h5>
            <p className="watch-caption">A new manufactory film dives into the heart of Glashütte Original.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="aspect-ratio-container">
          <img
            className="d-block w-100"
            src='https://img.freepik.com/premium-photo/panorama-golden-pearls-bracelets-ring-white-podium-pink-background_112112-1323.jpg?w=996'
            alt="Second slide"
          
          />
          </div>
          <Carousel.Caption>
            <h5 className="jewellery-title ">Handpicked Headphones</h5>
            <p className="jewellery-caption text-white">We've done the research so you don't have to.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="aspect-ratio-container">
          <img
            className=" img d-bloc w-100"
            src='https://img.freepik.com/premium-photo/light-blue-headset-panorama-plain-studio-background-with-lights_376663-2.jpg?w=1380 '
            alt="Third slide"
           
           
          />
          </div>
          <Carousel.Caption  >
            <h5 className="headphone-title ">BLING Together</h5>
            <p className="headphone-caption text-white ">
            Crafted For Young Professionals.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
}

export default Slide;