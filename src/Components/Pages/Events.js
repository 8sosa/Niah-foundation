import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Events.css';
import EventImg from '../../Images/HPicture.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Events() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);

  
  return (
    <Container className='eventsPage'>
      <h1 className='pageHeader raleway'>Events</h1>
      <div className='d-flex flex-column w100 mb-5' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className='eventGroupHeader'>
          <h2 className='eventGroupHeaderTxt raleway m-0'>Upcoming events</h2>
          <hr className='line'/>
        </div>
        <Row className='eventTab' md={3}>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 1</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 2</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 3</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
        </Row>    
      </div>
      <div className='d-flex flex-column w100 mb-5' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className='eventGroupHeader'>
          <h2 className='eventGroupHeaderTxt raleway m-0'>Previous events</h2>
          <hr className='line'/>
        </div>
        <Row className='eventTab' md={3}>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 1</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 2</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
        </Row>
      </div> 
    </Container>
  );
}
