import React, { useState } from 'react';
import './Carousel.css';
import { Col, Row } from 'react-bootstrap';
import slideData from '../Json/testimonials.json';

function NiahCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = slideData;
  const numSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numSlides) % numSlides);
  };

  const getPrevIndex = (index) => (index - 1 + numSlides) % numSlides;
  const getNextIndex = (index) => (index + 1) % numSlides;

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  return (
    <div className='slider'>
      <div className='slides-container'>
        <div onClick={prevSlide} className='itemPrev'>
          <Row className='idTop'>
            <Col className='idCol'>
              <img src={require('../Images/' + slides[prevIndex].src)} alt={slides[prevIndex].alt} className='itemImg' />
            </Col>
            <Col className='idCol'>
              <h2 className='idHeader1 openSans'>{slides[prevIndex].header}</h2>
              <span className='idHeaderTxt1 openSans'>{slides[prevIndex].subHeader}</span>
            </Col>
          </Row>
          <p className='idBody1 openSans'>{slides[prevIndex].body}</p>
          <span className='idFooter1 openSans'>{slides[prevIndex].footer}</span>
        </div>
        <div className='itemActive'>
          <Row className='idTop'>
            <Col className='idCol'>
              <img src={require('../Images/' + slides[currentIndex].src)} alt={slides[currentIndex].alt} className='itemImg' />
            </Col>
            <Col className='idCol'>
              <h2 className='idHeader openSans'>{slides[currentIndex].header}</h2>
              <span className='idHeaderTxt openSans'>{slides[currentIndex].subHeader}</span>
            </Col>
          </Row>
          <p className='idBody openSans'>{slides[currentIndex].body}</p>
          <span className='idFooter openSans'>{slides[currentIndex].footer}</span>
        </div>
        <div onClick={nextSlide} className='itemNext'>
          <Row className='idTop'>
            <Col className='idCol'>
              <img src={require('../Images/' + slides[nextIndex].src)} alt={slides[nextIndex].alt} className='itemImg' />            
            </Col>
            <Col className='idCol'>
              <h2 className='idHeader1 openSans'>{slides[nextIndex].header}</h2>
              <span className='idHeaderTxt1 openSans'>{slides[nextIndex].subHeader}</span>
            </Col>
          </Row>
          <p className='idBody1 openSans'>{slides[nextIndex].body}</p>
          <span className='idFooter1 openSans'>{slides[nextIndex].footer}</span>
        </div>
      </div>
    </div>
  );
}

export default NiahCarousel;
