import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import {Container} from 'react-bootstrap';
import Logo from '../Images/logoYt.png'

function NiahFooter() {
  return (
    <>
        <Container className='footer'>
            <div className='footerLinkBox'>
                <div className='footerLinkCol'>
                    <span className='footerLinkHeader'>QUICK <span className='peach'>LINKS</span></span>
                    <a href="#top" className='footerLink'>Volunteer</a>
                    <a href="#top" className='footerLink'>Workshops</a>
                    <a href="#top" className='footerLink'>Community</a>
                    <a href="#top" className='footerLink'>Activities</a>
                    <a href="#top" className='footerLink'>Publications</a>
                </div>
                <div className='footerLinkCol1'>
                    <span className='footerLinkHeader'>CONTACT <span className='peach'>US</span></span>
                    <a href="#top" className='footerLink'>Enquiries:  info@niahfoundation.com</a>
                    <a href="#top" className='footerLink'>Address: Chenaniah’s House In Magodo 900233 Lagos, Nigeria</a>
                    <a href="#top" className='footerLink'>Call: 08038111448</a>
                    <a href="#top" className='footerLink'>Whatsapp: 08128123221</a>
                </div>
            </div>
            <div className='footerBrand'>
                <img src={Logo} alt='Niah Foundation logo' className='footerLogo'/>
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