import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Events.css';
import Eoy from '../../Images/eoy.jpg'
import Dowager from '../../Images/dowager.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Events() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);

  
  return (
    <Container className='eventsPage'>
      <h1 className='pageHeader raleway'>Events</h1>
      {/* <div className='d-flex flex-column w100 mb-5' data-aos="fade-up" data-aos-anchor-placement="top-center">
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
      </div> */}
      <div className='d-flex flex-column w100 mb-5' data-aos-anchor-placement="top-center">
        <div className='eventGroupHeader'>
          <h2 className='eventGroupHeaderTxt raleway m-0'>Previous events</h2>
          <hr className='line'/>
        </div>
        <Row className='eventTab'>
          <Col className='d-flex flex-column mb-5'>
            <img src={Eoy} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader raleway'>End of Year Orphanage Party:</h4>
            <span className='eventBody raleway'>We celebrated the end of the year with joy at the Olive Blooms Orphanage, creating memorable moments with the 10 children under the care of excellent People on the 29th of December.</span>
          </Col>
          <Col className='d-flex flex-column mb-5'>
            <img src={Dowager} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader raleway'>Dowager (Food) Outreach:</h4>
            <span className='eventBody raleway'>To mark National Grief Awareness Day (August 30), our "Dowager Outreach" reached 100 widows and single mothers, offering essential food items to alleviate their challenges and bring comfort to their lives.</span>
          </Col>
        </Row>
      </div> 
    </Container>
  );
}
