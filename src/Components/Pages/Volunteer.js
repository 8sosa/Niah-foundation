import React, {useEffect} from 'react'
import './Volunteer.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Placeholder from '../../Images/ph.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Volunteer() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);


  return (
    <>
      <Container className='greenBg1'>
        <h1 className='pageHeader raleway'>Volunteer</h1>
        <Row className='d-flex flex-column mb-4'>
          <Col>
            <img src={Placeholder} alt='People volunteering' className='volunteerImg' />
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <h1 className='founder1Header raleway'>Join Our Volunteer Team and Make a Difference!</h1>
            <span className='founder1Body openSans'>At Niah Foundation, we believe that everyone has the power to create change. Volunteering with us provides the opportunity to contribute to impactful initiatives across mental health awareness, inclusion, and community welfare.</span>
          </Col>
        </Row>
        <button type='submit' className='donateCardBtn raleway'>Learn More</button>
      </Container>
      <Container className='eventsPage'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='pageHeader raleway mt-3'>benefits</h1>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Personal Growth</span>: Develop new skills, gain experience, and boost your resume.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Community Impact</span>: Contribute to meaningful change within underserved communities.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Networking Opportunities</span>: Build connections with like-minded individuals and professionals.</p>
          <p className='founder1Body openSans mb-5 asfs'><span className='bodyBold'>Recognition and Rewards</span>:  Your contributions are celebrated through awards, incentives, and acknowledgement.</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='pageHeader raleway mt-4'>what it entails</h1>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Roles and Responsibilities</span>: Take on tasks specific to your chosen department.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Time Commitment</span>: Flexible schedules designed to fit your availability.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Training and Support</span>: Receive comprehensive guidance to succeed in your role.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Expectations</span>: Demonstrate professionalism, punctuality, and a commitment to our values.</p>
        </div>
       </Container>
      <Container className='team origins'>
        <h1 className='yt pageHeader raleway'>units</h1>
        <Row className='mb-5'>
          <Col className='d-flex flex-column align-items-start jcsa'>
            <h3 className='unitHead openSans'>Welfare</h3>
            <p className='unitBody openSans'>Support individuals and communities through direct assistance programs.</p>
            <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Person Name</span></h4>
            <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
          </Col>
          <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
        </Row>
        <Row>
          <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
          <Col className='d-flex flex-column align-items-end jcsa'>
            <h3 className='unitHead openSans'>Fundraising</h3>
            <p className='unitBody openSans'>Drive efforts to secure resources that fuel our mission.</p>
            <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Jesudamilola Ladipo</span></h4>
            <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='d-flex flex-column align-items-start jcsa'>
            <h3 className='unitHead openSans'>Finance</h3>
            <p className='unitBody openSans'>Help manage budgets and ensure efficient allocation of funds.</p>
            <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Jesudamilola Ladipo</span></h4>
            <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
          </Col>
          <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
        </Row>
        <Row>
          <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
          <Col className='d-flex flex-column align-items-end jcsa'>
            <h3 className='unitHead openSans'>Logistics</h3>
            <p className='unitBody openSans'>Coordinate events, outreach programs, and resource distribution.</p>
            <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Oluwadamilola Oke</span></h4>
            <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='d-flex flex-column align-items-start jcsa'>
            <h3 className='unitHead openSans'>Media</h3>
            <p className='unitBody openSans'>Spread awareness through content creation, campaigns, and digital outreach.  </p>
            <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Person Name</span></h4>
            <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
          </Col>
          <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
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
            <Form.Group className="mb-3" controlId="Enquirer Number">
                <Form.Control type="num" placeholder="Phone Number" className='inputField raleway'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Enquirer Location">
                <Form.Control type="text" placeholder="Location" className='inputField raleway'/>
            </Form.Group>
            <button type='submit' className='contactCardBtn raleway'>Register</button>
          </Form>
        </div>
      </Container>
    </>
  )
}