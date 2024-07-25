import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Publications.css'
import Publi from '../../Images/publi.png'

export default function Publications() {
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
    </>
  )
}