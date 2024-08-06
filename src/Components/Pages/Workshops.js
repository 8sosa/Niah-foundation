import React, {useEffect} from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import './Workshops.css'
import TrainImg from '../../Images/MPicture.png'
import Sponsor from '../../Images/sponsor.png'
import NiahCarousel from '../Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Workshops() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);
  return (
    <>
      <Container className='eventsPage'>
          <h1 className='pageHeader raleway'>NIAH WORKSHOPS</h1>
          <h2 className='subHeader raleway'>Upcoming Trainings</h2>
          <Accordion defaultActiveKey="0" className='accordion' data-aos="fade-up">
            <Accordion.Item eventKey="0" className='workshopGroup'>
              <Accordion.Header className='workshopGroupHeader'>Graphic Design</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col className='d-flex flex-column align-items-center'>
                    <img src={TrainImg} alt='training that happened before' className='trainImg'/>
                    <span className='openSans trainBody'>12:00 - 18:00</span>
                    <span className='openSans trainBody'>19 November 2024</span>
                  </Col>
                  <Col className='txtCol'>
                    <span className='trainBody openSans'>Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare.</span>
                    <button className='donateCardBtn'>Register</button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='workshopGroup'>
              <Accordion.Header className='workshopGroupHeader'>Graphic Design</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col className='d-flex flex-column align-items-center'>
                    <img src={TrainImg} alt='training that happened before' className='trainImg'/>
                    <span className='openSans trainBody'>12:00 - 18:00</span>
                    <span className='openSans trainBody'>19 November 2024</span>
                  </Col>
                  <Col className='txtCol'>
                    <span className='trainBody openSans'>Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare.</span>
                    <button className='donateCardBtn'>Register</button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h2 className='subHeader raleway mt-5'>Previous Trainings</h2>
          <Accordion className='accordion' data-aos="fade-up">
            <Accordion.Item eventKey="0" className='workshopGroup'>
              <Accordion.Header className='workshopGroupHeader'>Graphic Design</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col className='d-flex flex-column align-items-center'>
                    <img src={TrainImg} alt='training that happened before' className='trainImg'/>
                    <span className='openSans trainBody'>12:00 - 18:00</span>
                    <span className='openSans trainBody'>19 November 2024</span>
                  </Col>
                  <Col className='txtCol'>
                    <span className='trainBody openSans'>Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare.</span>
                    <button className='donateCardBtn'>Register</button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='workshopGroup'>
              <Accordion.Header className='workshopGroupHeader'>Graphic Design</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col className='d-flex flex-column align-items-center'>
                    <img src={TrainImg} alt='training that happened before' className='trainImg'/>
                    <span className='openSans trainBody'>12:00 - 18:00</span>
                    <span className='openSans trainBody'>19 November 2024</span>
                  </Col>
                  <Col className='txtCol'>
                    <span className='trainBody openSans'>Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Phasellus in ornare.</span>
                    <button className='donateCardBtn'>Register</button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </Container>
      <Container className='purpSection'>
        <h1 className='sponsorHeader pageHeader raleway'>OUR SPONSORS</h1>
        <Row className='sponsors'>
          <img src={Sponsor} alt='logo' className='sponsorImg' data-aos="zoom-in"/>
          <img src={Sponsor} alt='logo' className='sponsorImg' data-aos="zoom-in"/>
          <img src={Sponsor} alt='logo' className='sponsorImg' data-aos="zoom-in"/>
          <img src={Sponsor} alt='logo' className='sponsorImg' data-aos="zoom-in"/>
          <img src={Sponsor} alt='logo' className='sponsorImg' data-aos="zoom-in"/>
        </Row>
      </Container>
      <Container className='testiBg'>
        <h1 className='raleway' data-aos="fade-up">TESTIMONIALS</h1>
        <NiahCarousel/>
      </Container>
    </>
  )
}