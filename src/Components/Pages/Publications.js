import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Publications.css'
import Publi from '../../Images/publi.png'
import Vlog from '../../Images/vlog.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Publications() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);


  return (
    <>
      <Container className='origins'>
          <h1 className='pageHeader raleway'>Publications</h1>
          <Row className='w100 mb-4'>
            <Col className='fitted'><img src={Publi} alt='A publication' className='publicationImg' /></Col>
            <Col className='d-flex flex-column jcsa'>
              <h2 className='publicationHeader raleway'>Sed gravida mauris in lobortis tempus. Etiam ac feugiat quam.</h2>
              <p className='publicationBody openSans'>Proin non metus diam. Duis dapibus tortor quis leo vulputate consequat. Aenean ultrices scelerisque rhoncus. Phasellus ac nunc non tortor. Proin non metus diam. Duis dapibus tortor quis leo vulputate consequat. Aenean ultrices scelerisque rhoncus. Phasellus ac nunc non tortor.</p>
              <span className='publicationFooter raleway'>Read More...</span>
            </Col>
          </Row>
          <Row className='w100 mb-4'>
            <Col className='fitted'><img src={Publi} alt='A publication' className='publicationImg' /></Col>
            <Col className='d-flex flex-column jcsa'>
              <h2 className='publicationHeader raleway'>Sed gravida mauris in lobortis tempus. Etiam ac feugiat quam.</h2>
              <p className='publicationBody openSans'>Proin non metus diam. Duis dapibus tortor quis leo vulputate consequat. Aenean ultrices scelerisque rhoncus. Phasellus ac nunc non tortor. Proin non metus diam. Duis dapibus tortor quis leo vulputate consequat. Aenean ultrices scelerisque rhoncus. Phasellus ac nunc non tortor.</p>
              <span className='publicationFooter raleway'>Read More...</span>
            </Col>
          </Row>
          <Row className='w100 mb-4'>
            <Col className='fitted'><img src={Publi} alt='A publication' className='publicationImg' /></Col>
            <Col className='d-flex flex-column jcsa'>
              <h2 className='publicationHeader raleway'>Sed gravida mauris in lobortis tempus. Etiam ac feugiat quam.</h2>
              <p className='publicationBody openSans'>Proin non metus diam. Duis dapibus tortor quis leo vulputate consequat. Aenean ultrices scelerisque rhoncus. Phasellus ac nunc non tortor. Proin non metus diam. Duis dapibus tortor quis leo vulputate consequat. Aenean ultrices scelerisque rhoncus. Phasellus ac nunc non tortor.</p>
              <span className='publicationFooter raleway'>Read More...</span>
            </Col>
          </Row>
      </Container>
      <Container className='vlogs'>
        <h1 className='yt pageHeader raleway'>VLOGS</h1>
        <Row className='d-flex w100 jcc' data-aos="fade-up">
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3'>
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway'>Proin non metus diam.</h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3'>
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway'>Proin non metus diam.</h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3'>
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway'>Proin non metus diam.</h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3'>
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway'>Proin non metus diam.</h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3'>
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway'>Proin non metus diam.</h3>
          </Col>
          <Col className='d-flex flex-column jcsb flex1 fitted mb-3'>
            <img src={Vlog} alt='Title of the vlog' className='teamImg' />
            <h3 className='yt teamBody raleway'>Proin non metus diam.</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}