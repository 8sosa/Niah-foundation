import React, {useEffect} from 'react'
import './Team.css'
import { Col, Container, Row } from 'react-bootstrap'
import Founder from '../../Images/founder1.png'
import Vlog from '../../Images/vlog.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);


  return (
    <>
      <Container className='hero'>
        <h1 className='heroHeader raleway'>THE FOUNDATION TEAM</h1>
      </Container>
      <Container className='greenBg1'>
        <Row data-aos="fade-up">
          <Col className='d-flex flex-column align-items-center jcc'>
            <img src={Founder} alt='CHENANIAH BAMISHILE' className='founder1Img' />
            <span className='founder1Txt raleway'>Founder</span>
          </Col>
          <Col className='d-flex flex-column align-items-center jcfs'>
            <h1 className='founder1Header raleway'>CHENANIAH <span className='bold'>BAMISHILE</span></h1>
            <span className='founder1Body openSans'>In consequat ac velit a porttitor. Aenean dapibus scelerisque lorem non fringilla. Nullam et orci vitae felis porta fringilla. Sed imperdiet magna id est lobortis posuere. Praesent condimentum volutpat dolor, sit amet iaculis justo ultrices vitae. Maecenas ut elementum lectus, in tristique elit. Suspendisse eu mauris lacus. Suspendisse potenti.</span>
            <span className='founder1Body openSans'>Vivamus tellus dolor, faucibus efficitur augue sed, feugiat cursus diam. Proin ac quam tortor. Pellentesque eleifend vulputate aliquet. In ut ex a odio pellentesque dignissim. Cras viverra iaculis ipsum, ut faucibus neque. Ut porta, urna at elementum iaculis, mi lacus laoreet est, sit amet vulputate lacus felis non mauris. Mauris mattis fringilla eros sit amet luctus. Integer eget tortor fringilla, sollicitudin odio volutpat, ultricies nunc. Vivamus sapien erat, gravida ac libero at, convallis egestas massa. Suspendisse quis nisl eget ante auctor ornare vel mattis urna. Vivamus consectetur gravida neque, sed malesuada erat. Vestibulum eu sem et urna commodo facilisis in ac lectus. Nunc erat sapien, interdum a lorem nec, lacinia luctus dui. Praesent convallis dolor magna, ac tempor eros dictum a.</span>
          </Col>
        </Row>
      </Container>
      <Container className='team origins'>
        <h1 className='yt pageHeader raleway shadow1'>THE FOUNDATION TEAM</h1>
        <Row className='d-flex w100 jcse'>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3' data-aos="fade-up-left">
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway shadow1'>PERSON <span className='bold1'>NAME</span></h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3' data-aos="fade-up-right">
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway shadow1'>PERSON <span className='bold1'>NAME</span></h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3' data-aos="fade-up-left">
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway shadow1'>PERSON <span className='bold1'>NAME</span></h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3' data-aos="fade-up-right">
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway shadow1'>PERSON <span className='bold1'>NAME</span></h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3' data-aos="fade-up-left">
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway shadow1'>PERSON <span className='bold1'>NAME</span></h3>
          </Col>
        </Row>
      </Container>
      <Container className='greenBg1'>
        <h1 className='sectionHeader'>VOLUNTEER OF THE MONTH</h1>
        <Row data-aos="fade-up">
          <Col className='d-flex flex-column align-items-center fitted'>
          <img src={Vlog} alt='CHENANIAH BAMISHILE' className='founder1Img' />
          <h3 className='teamBody raleway shadow1'>PERSON <span className='bold1'>NAME</span></h3>
          </Col>
          <Col className='d-flex'><span className='founder1Body openSans m-0'>Phasellus in ornare eros. Morbi iaculis tellus eu dictum facilisis. Aliquam tristique molestie quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur metus dolor, imperdiet eget velit vitae, consequat hendrerit lorem. Proin lacinia neque vitae turpis congue elementum. Sed eget nibh sit amet purus viverra laoreet. Sed finibus sollicitudin euismod. Phasellus ac euismod sem. Phasellus mattis ut quam sed porttitor.</span></Col>
        </Row>
      </Container>
    </>
  )
}