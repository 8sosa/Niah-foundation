import React, {useEffect} from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Adjust the duration if needed
      }, []);
    
  return (
    <>
        <Container className='contactContainer'>
            <h1 className='pageHeader raleway asfs'>Contact Us</h1>
            <Row>
                <Col className='d-flex flex-column'>
                    <h2 className='colHeader raleway'>CONTACT DETAILS</h2>
                    <span className='colBody openSans'>General: info@niahfoundation.org</span>
                    <span className='colBody openSans'>Publicity: niah@niah.com</span>
                    <span className='colBody openSans'>Phone Number: 09123456789</span>
                </Col>
                <Col className='d-flex flex-column'>
                    <h2 className='colHeader raleway'>OUR ADDRESS</h2>
                    <span className='colBody openSans'>Plot Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, Lagos. Nigeria.</span>
                </Col>
            </Row>
            <div className='contactCard' data-aos="zoom-out">
                <Form className='w100'>
                    <Form.Group className="mb-3" controlId="Enquirer Name">
                        <Form.Control type="text" placeholder="Name *" className='inputField raleway'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Enquirer Email">
                        <Form.Control type="email" placeholder="Email *" className='inputField raleway'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Enquiry Subject">
                        <Form.Control type="text" placeholder="Subject *" className='inputField raleway'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Enquiry message">
                        <Form.Control as="textarea" rows={2} placeholder="Message" className='inputField raleway'/>
                    </Form.Group>
                    <button type='submit' className='contactCardBtn raleway'>Message Us</button>
                </Form>
            </div>
        </Container>
    </>
  )
}