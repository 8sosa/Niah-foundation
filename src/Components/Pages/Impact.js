import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Med from '../../Images/med.jpg'
import Blood from '../../Images/blood.jpeg'
import Impact0 from '../../Images/impact.jpeg'
import Impact1 from '../../Images/impact1.jpeg'
import Impact2 from '../../Images/Picture.png'
import Impact3 from '../../Images/impact3.jpeg'


export default function Impact () {
  return (
    <>
        <Container className='hero' id="aboutHero"><h1 className='heroHeader raleway'>OUR IMPACT</h1></Container>
        <Container className='origins'>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Med} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>Medical Outreach (#SarahGoesToSchool):</h3>
              <p className='eventHeaderBody'>On the 30th of September, we were able to provide medication, free consultations, blood pressure tests and more to about 150 beneficiaries in our target community in Alagbado. Our medical outreach was not just about providing healthcare; it became a celebration of hope. Sarah, the daughter of one of our beneficiaries, became the first recipient of our #SarahGoesToSchool campaign. As fate would have it, it was also her birthday, and thanks to the incredible support of our volunteers and donors, we raised enough funds to enrol Sarah in school.</p>
            </Col>
          </Row>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Blood} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>Blood Drive:</h3>
              <p className='eventHeaderBody'>We contributed to life-saving efforts at Massey Children's Hospital by donating pints of blood during our impactful blood drive on the 2nd of December.</p>
            </Col>
          </Row>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Impact0} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>School Visit:</h3>
              <p className='eventHeaderBody'>On the 6th of March 2024 we visited the brilliant female students at ikoyi government secondary school to discuss mental resilience and coping mechanisms particularly for young women in STEM. The session was engaging and insightful.</p>
            </Col>
          </Row>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Impact1} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>School Visit:</h3>
              <p className='eventHeaderBody'>Empowering the young minds at Kuramo college with an engaging talk ok mental health, discipline and careers. World education day of 2023 couldn’t be spent in a better way.</p>
            </Col>
          </Row>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Impact2} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>Library launch/book donation drive:</h3>
              <p className='eventHeaderBody'>Through the support of our great community through book  and monetary donations , we surprised the bright students at Harrobs primary school with the creation of a library for the great minds to grow.</p>
            </Col>
          </Row>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Impact3} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>Blood Drive:</h3>
              <p className='eventHeaderBody'>We contributed to life-saving efforts at Massey Children's Hospital by donating pints of blood during our impactful blood drive.</p>
            </Col>
          </Row>
        </Container>
    </>
  )
}