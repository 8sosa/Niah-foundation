import React from 'react'
import './Volunteer.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Volunt from '../../Images/HPicture.png'
import Unit from '../../Images/PictureK.png'

export default function Volunteer() {
  return (
    <>
      <Container className='greenBg1'>
        <h1 className='pageHeader raleway'>Volunteer</h1>
        <Row className='d-flex flex-column mb-4'>
          <Col>
            <img src={Volunt} alt='People volunteering' className='volunteerImg' />
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <h1 className='founder1Header raleway'>Join Our Volunteer Team and Make a Difference!</h1>
            <span className='founder1Body openSans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at rutrum ipsum, vel tincidunt nulla. Ut ut consectetur augue. Donec venenatis faucibus risus, ac luctus dui consequat id.</span>
          </Col>
        </Row>
        <button type='submit' className='donateCardBtn raleway'>Learn More</button>
      </Container>
      <Container className='eventsPage'>
        <h1 className='pageHeader raleway mt-3'>benefits</h1>
        <span className='founder1Body openSans'><span className='bodyBold'>Personal Growth</span>: Explain how volunteering can help individuals develop new skills, gain experience, and boost their resumes.</span>
        <span className='founder1Body openSans'><span className='bodyBold'>Community Impact</span>: Describe the positive effects volunteers have on the community and the specific causes the charity supports.</span>
        <span className='founder1Body openSans'><span className='bodyBold'>Networking Opportunities</span>: Mention the social aspect of volunteering, such as meeting new people and building connections.</span>
        <span className='founder1Body openSans mb-5'><span className='bodyBold'>Recognition and Rewards</span>: Detail any recognition programs, awards, or incentives for volunteers.</span>
        <h1 className='pageHeader raleway mt-4'>what it entails</h1>
        <span className='founder1Body openSans'><span className='bodyBold'>Roles and Responsibilities</span>: List different volunteer roles available, along with brief descriptions of their duties.</span>
        <span className='founder1Body openSans'><span className='bodyBold'>Time Commitment</span>: Specify the time requirements for each role (e.g., hours per week, duration of commitment).</span>
        <span className='founder1Body openSans'><span className='bodyBold'>Training and Support</span>: Explain any training provided to volunteers and the support they will receive from the organization.</span>
        <span className='founder1Body openSans'><span className='bodyBold'>Expectations</span>: Outline general expectations, such as punctuality, professionalism, and adherence to the charity’s values and guidelines.</span>
      </Container>
      <Container className='team origins'>
        <h1 className='yt pageHeader raleway'>units</h1>
        <Row className='mb-5'>
          <Col className='d-flex flex-column align-items-start jcsa'>
            <h3 className='unitHead openSans'>unit 1</h3>
            <p className='unitBody openSans'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia consectetur lacus, eu rutrum massa scelerisque sit amet.Nam varius varius aliquet. Maecenas lacinia libero volutpat malesuada lobortis. Sed congue mollis dui, vehicula ullamcorper dolor elementum id.</p>
            <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Person Name</span></h4>
            <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
          </Col>
          <Col><img src={Unit} alt='A unit' className='unitImg' /></Col>
        </Row>
        <Row>
          <Col><img src={Unit} alt='A unit' className='unitImg' /></Col>
          <Col className='d-flex flex-column align-items-end jcsa'>
            <h3 className='unitHead openSans'>unit 2</h3>
            <p className='unitBody openSans'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia consectetur lacus, eu rutrum massa scelerisque sit amet.Nam varius varius aliquet. Maecenas lacinia libero volutpat malesuada lobortis. Sed congue mollis dui, vehicula ullamcorper dolor elementum id.</p>
            <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Person Name</span></h4>
            <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
          </Col>
        </Row>
      </Container>
      <Container className='mosaicBg1'>
        <div className='volunteerCard mt-5 mb-5'>
          <h1 className='pageHeader raleway'>Volunteer</h1>
          <Form className='w100'>
            <Form.Group className="mb-3" controlId="Enquirer Name">
                <Form.Control type="text" placeholder="Full Name" className='inputField raleway'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Enquirer Email">
                <Form.Control type="email" placeholder="Email" className='inputField raleway'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Enquiry Subject">
                <Form.Control type="num" placeholder="Phone Number" className='inputField raleway'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Enquiry message">
                <Form.Control type="text" placeholder="Location" className='inputField raleway'/>
            </Form.Group>
            <button type='submit' className='contactCardBtn raleway'>Register</button>
          </Form>
        </div>
      </Container>
    </>
  )
}