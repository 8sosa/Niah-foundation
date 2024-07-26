import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import './About.css'
import Founder from '../../Images/founder.png'
import Event from '../../Images/event.png'

export default function About() {
  return (
    <>
        <Container className='hero'><h1 className='heroHeader raleway'>NIAH FOUNDATION</h1></Container>
        <Container className='origins'>
          <h1 className='originsHeader pageHeader raleway'>NF’s ORIGINS</h1>
          <p className='originsBody trainBody openSans'>Sed vitae ipsum dictum odio consectetur eleifend ut sed mi. Curabitur tincidunt sed quam ac elementum. Fusce posuere facilisis turpis, ut ullamcorper turpis semper sed. Nullam id massa vel dui ornare dignissim. Phasellus sit amet laoreet nunc, sed vehicula diam. Ut at quam sit amet diam mattis interdum nec vel.</p>
          <Accordion defaultActiveKey="0" className='accordion'>
            <Accordion.Item eventKey="0" className='aboutHeader'>
              <Accordion.Header>Our MISSION</Accordion.Header>
              <Accordion.Body className='aboutBody'>
                <p className='OFDesc'>To bring mental health awareness into every African home and as a result promote the inclusion of special needs individuals into systems in the continent.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='aboutHeader'>
              <Accordion.Header>Our VISSION</Accordion.Header>
              <Accordion.Body className='aboutBody'>
                <p className='OFDesc'>To be the foremost voice and movement on mental health in Africa.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='aboutHeader'>
              <Accordion.Header>Our OBJECTIVES</Accordion.Header>
              <Accordion.Body className='aboutBody'>
                <ul>
                  <li><p className='OFDesc'>Empowering communities through compassion and action. Our mission is to drive positive change by fostering education, supporting mental health, and cultivating a spirit of unity.</p></li>
                  <li><p className='OFDesc'>Empowering communities through compassion and action. Our mission is to drive positive change by fostering education, supporting mental health, and cultivating a spirit of unity.</p></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
        <Container className='founder'>
            <h1 className='founderHeader subHeader raleway'>THE <span className='founderHeaderBold'>FOUNDER</span></h1>
            <img src={Founder} alt='the founder - Chenaniah Bamishile' className='founderPic' />
            <div className='mt-5'>
              <p className='founderBody OFDesc'>Quisque ac aliquet augue, eget maximus eros. Morbi nisi lacus, placerat vitae efficitur nec, ullamcorper eget sem. Nam fringilla mattis accumsan. Praesent id urna finibus sapien blandit ultricies. Aenean ultrices justo a turpis vulputate maximus. Aliquam elementum fermentum dolor quis aliquam. Aliquam sed nisl sem. Ut vel rutrum sem. Vestibulum at tristique ex. Nam fermentum odio tempus tristique eleifend. Vivamus vel risus orci.</p> 
              <p className='founderBody OFDesc'>Donec pharetra ullamcorper nunc. Phasellus nec gravida massa. Donec tempus vel ex eu venenatis. Mauris non pulvinar tortor. Aliquam bibendum massa nisl, quis vestibulum nisi aliquet non. Donec tincidunt dui libero. Fusce non commodo turpis. Nulla quis.</p> 
            </div>
        </Container>
        <Container className='origins'>
          <h1 className='eventHeader subHeader raleway'>OUR <span className='founderHeaderBold'>IMPACT</span></h1>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Event} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>SOME PAST EVENT</h3>
              <p className='eventHeaderBody'>Quisque ac aliquet augue, eget maximus eros. Morbi nisi lacus, placerat vitae efficitur nec, ullamcorper eget sem. Nam fringilla mattis accumsan. Praesent id urna finibus sapien blandit ultricies. Aenean ultrices justo a turpis vulputate maximus. Aliquam elementum fermentum dolor quis aliquam. Aliquam sed nisl sem. Ut vel rutrum sem. Vestibulum at tristique ex. Nam fermentum odio tempus tristique eleifend. Vivamus vel risus orci.</p>
            </Col>
          </Row>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Event} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>SOME PAST EVENT</h3>
              <p className='eventHeaderBody'>Quisque ac aliquet augue, eget maximus eros. Morbi nisi lacus, placerat vitae efficitur nec, ullamcorper eget sem. Nam fringilla mattis accumsan. Praesent id urna finibus sapien blandit ultricies. Aenean ultrices justo a turpis vulputate maximus. Aliquam elementum fermentum dolor quis aliquam. Aliquam sed nisl sem. Ut vel rutrum sem. Vestibulum at tristique ex. Nam fermentum odio tempus tristique eleifend. Vivamus vel risus orci.</p>
            </Col>
          </Row>
          <a href='/events' className='eventHeaderTxt align-self-end mb-5'>View more...</a>
          <h2 className='eventHeader subHeader raleway'>ACHIEVEMENTS</h2>
          <ul>
            <li className='newEventTxt mb-2'>Nunc id metus ornare, malesuada mauris ut, vestibulum diam.</li>
            <li className='newEventTxt mb-2'>Donec et augue tempus elit imperdiet tristique at sed lorem.</li>
            <li className='newEventTxt mb-2'>Praesent hendrerit quam vitae lorem bibendum, ac placerat ante sodales.</li>
            <li className='newEventTxt mb-2'>Mauris id justo viverra lacus vestibulum aliquet nec et enim.</li>
          </ul>
        </Container>
    </>
  )
}