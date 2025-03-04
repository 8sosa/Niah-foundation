import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import {Container} from 'react-bootstrap';
// import Logo from '../Images/logoNoBg.png'

function NiahFooter() {
  return (
    <>
        <Container className='footer'>
            <div className='footerLinkBox'>
                <div className='footerLinkCol'>
                    <span className='footerLinkHeader'>QUICK <span className='peach'>LINKS</span></span>
                    <a href="/" className="footerLink" aria-label="Home">Home</a>
                    <a href="/about-us" className="footerLink" aria-label="About Us">About Us</a>
                    <a href="/events" className="footerLink" aria-label="events">Events</a>
                    <a href="/the-team" className="footerLink" aria-label="Team">The Team</a>
                    <a href="/volunteer" className="footerLink" aria-label="Volunteer">Volunteer</a>
                    {/* <a href="/publications" className="footerLink" aria-label="Publications">Publications</a> */}
                    {/* <a href="/workshops" className="footerLink" aria-label="Workshops">Workshops</a> */}
                    {/* <a href="/community" className="footerLink" aria-label="Community">Community</a> */}
                    <a href="/contact-us" className="footerLink" aria-label="Contact Us">Contact Us</a>
                </div>
                <div className='footerLinkCol1'>
                    <span className='footerLinkHeader'>CONTACT <span className='peach'>US</span></span>
                    <a href="#top" className='footerLink'>Enquiries:  niahfoundation@gmail.com</a>
                    <a href="#top" className='footerLink'>Address: Estate Plaza, Emmanuel Keshi. Magodo Phase 2, Lagos. Nigeria.</a>
                    <a href="#top" className='footerLink'>Call: 07067561557</a>
                    <a href="#top" className='footerLink'>Whatsapp: 07067561557</a>
                </div>
            </div>
            <div className='footerBrand'>
                {/* <img src={Logo} alt='Niah Foundation logo' className='footerLogo'/> */}
                <span className='footerBrandname'><span className='green'>NIAH</span> FOUNDATION</span>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <span className='copyright'>Copyright 2023 © Niah Foundation</span>
                <span className='copyright'>All Rights Reserved</span>
            </div>
        </Container>
    </>
  );
}

export default NiahFooter;