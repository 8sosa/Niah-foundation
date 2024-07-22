import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useState } from 'react';
import {Container, Navbar, Offcanvas} from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../Images/logoBlack.png'

function NiahNavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <Navbar collapseOnSelect expand="lg" className="niahNavbar" as="nav">
        <Container className='niahNavbarContainer'>
          <Navbar.Brand href="/home"><img src={Logo} alt='Niah Foundation' className='niahLogo' /></Navbar.Brand>
          <div onClick={handleShow} className='niahNavbarToggle'><RxHamburgerMenu /></div>
          <Offcanvas show={show} onHide={handleClose} placement='end' className="niahNavbarMenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column align-items-center'>
                <div className='navbox'>
                    <a href="#home" className="navLink" aria-label="Home">Home</a>
                    <a href="#about" className="navLink" aria-label="About Us">About Us</a>
                    <a href="#Events" className="navLink" aria-label="events">Events</a>
                    <a href="#Team" className="navLink" aria-label="Team">The Team</a>
                    <a href="#Volunteer" className="navLink" aria-label="Volunteer">Volunteer</a>
                    <a href="#Publications" className="navLink" aria-label="Publications">Publications</a>
                    <a href="#Workshops" className="navLink" aria-label="Workshops">Workshops</a>
                    <a href="#Community" className="navLink" aria-label="Community">Community</a>
                    <a href="#contact" className="navLink" aria-label="Contact Us">Contact Us</a>
                    <a href='#home'><button className='niahNavbarBtn'>Donate</button></a>
                </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
  );
}

export default NiahNavbar;