import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useState } from 'react';
import {Container, Navbar, Offcanvas} from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../Images/logoBlack.png'

export default function NiahNavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <Navbar collapseOnSelect expand="lg" className="niahNavbar" as="nav">
        <Container className='niahNavbarContainer'>
          <Navbar.Brand href="/"><img src={Logo} alt='Niah Foundation' className='niahLogo' /></Navbar.Brand>
          <div onClick={handleShow} className='niahNavbarToggle'><RxHamburgerMenu /></div>
          <Offcanvas show={show} onHide={handleClose} placement='end' className="niahNavbarMenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column align-items-center'>
              <div className='navbox'>
                <a href="/" className="navLink" aria-label="Home">Home</a>
                <a href="/about-us" className="navLink" aria-label="About Us">About Us</a>
                <a href="/events" className="navLink" aria-label="events">Events</a>
                <a href="/the-team" className="navLink" aria-label="Team">The Team</a>
                <a href="/volunteer" className="navLink" aria-label="Volunteer">Volunteer</a>
                <a href="/publications" className="navLink" aria-label="Publications">Publications</a>
                <a href="/workshops" className="navLink" aria-label="Workshops">Workshops</a>
                {/* <a href="/community" className="navLink" aria-label="Community">Community</a> */}
                <a href="/contact-us" className="navLink mb-5" aria-label="Contact Us">Contact Us</a>
                <a href='#home'><button className='niahNavbarBtn'>Donate</button></a>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
  );
}