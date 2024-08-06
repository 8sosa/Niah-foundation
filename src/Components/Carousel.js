import React, {useEffect} from 'react';
import './Carousel.css';
import { Col, Row } from 'react-bootstrap';
import slideData from '../Json/testimonials.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NiahCarousel() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);

  const slides = slideData;

  return (
    <div className='slider' data-aos="fade-up">
      {
        slides.map((testimonial) => (
          <div className='itemActive'>
            <Row className='idTop'>
              <Col className='idCol'>
                <img src={require('../Images/' + testimonial.src)} alt={testimonial.alt} className='itemImg' />
              </Col>
              <Col className='idCol'>
                <h2 className='idHeader openSans'>{testimonial.header}</h2>
                <span className='idHeaderTxt openSans'>{testimonial.subHeader}</span>
              </Col>
            </Row>
            <p className='idBody openSans'>{testimonial.body}</p>
            <span className='idFooter openSans'>{testimonial.footer}</span>
          </div>
        ))
      }
    </div>
  );
}

export default NiahCarousel;
