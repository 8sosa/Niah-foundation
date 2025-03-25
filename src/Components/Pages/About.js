import React, {useEffect} from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import './About.css'
import Founder from '../../Images/founder1.png'
import Med from '../../Images/med.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blood from '../../Images/blood.jpeg'


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);

  return (
    <>
        <Container className='hero' id="aboutHero"><h1 className='heroHeader raleway'>NIAH FOUNDATION</h1></Container>
        <Container className='origins'>
          <h1 className='originsHeader pageHeader raleway'>NF’s ORIGINS</h1>
          <p className='originsBody trainBody openSans'>Niah Foundation began as a spark of passion during Chenaniah Bamishile's university years. With a deep concern for mental health awareness and a special affinity for children with special needs, Chenaniah noticed a recurring pattern: friends and peers confided in her about struggles with anxiety, depression, and other challenges, often without the resources or knowledge to address them.</p>
          <p className='originsBody trainBody openSans'>This realisation inspired the launch of the Green Hearts Initiative, a social media campaign promoting mental health conversations on campus. The initiative included an interview series featuring individuals living with mental health conditions, providing insight into their experiences and reducing stigma through empathy and education. Its success marked the foundation’s first step in addressing mental health issues.</p>
          <p className='originsBody trainBody openSans'>After university, the challenge became scaling these efforts beyond the campus. Recognising that many in rural communities prioritised basic needs like food and education over mental health, the foundation evolved its approach. Niah Foundation began addressing immediate community needs—renovating schools, distributing food, and providing healthcare—while integrating mental health education into these efforts. By meeting people where they were, the foundation created a pathway for meaningful conversations and connections around mental well-being.</p>
          <p className='originsBody trainBody openSans'>Today, Niah Foundation continues to drive change, bridging the gap between basic needs and mental health awareness, and connecting communities with affordable resources to foster holistic wellness. Since 2021, the foundation has been a beacon of hope, prioritizing kindness and impactful change.</p>
          <Accordion defaultActiveKey="0" className='accordion' data-aos="fade-up">
            <Accordion.Item eventKey="0" className='aboutHeader'>
              <Accordion.Header>Our MISSION</Accordion.Header>
              <Accordion.Body className='aboutBody'>
                <p className='OFDesc'>To integrate mental health awareness into African households, advancing the inclusion of special needs individuals across communities.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='aboutHeader'>
              <Accordion.Header>Our VISSION</Accordion.Header>
              <Accordion.Body className='aboutBody'>
                <p className='OFDesc'>To lead Africa's conversation on mental health, shaping inclusive systems and sustainable change.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='aboutHeader'>
              <Accordion.Header>Our OBJECTIVES</Accordion.Header>
              <Accordion.Body className='aboutBody'>
                <ul>
                  <li><p className='OFDesc'>Raise awareness of mental health in underrepresented communities.</p></li>
                  <li><p className='OFDesc'>Champion the inclusion of special needs individuals.</p></li>
                  <li><p className='OFDesc'>Build collaborative systems of care and support.</p></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
        <Container className='founder' >
            <h1 className='founderHeader subHeader raleway'>THE <span className='founderHeaderBold'>FOUNDER</span></h1>
            <img src={Founder} alt='the founder - Chenaniah Bamishile' className='founderPic'/>
            <div className='mt-5'>
              <p className='founderBody OFDesc'>Niah Foundation was founded by Chenaniah Bamishile, a passionate mental health advocate dedicated to creating lasting change. Under her leadership, the foundation combines addressing immediate needs with spreading mental health awareness. Programs range from school renovations and food distribution to educating girls on mental health and empowering them with life skills.</p> 
              <p className='founderBody OFDesc'>Chenaniah’s vision drives Niah Foundation’s mission to foster inclusion and awareness. Her commitment to kindness, alongside her extensive experience as an HR consultant, volunteer, and youth leader, ensures that the foundation remains at the forefront of mental health advocacy.</p> 
            </div>
        </Container>
        <Container className='origins'>
          <h1 className='eventHeader subHeader raleway' id="eventHeader">OUR <span className='founderHeaderBold'>IMPACT</span></h1>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Med} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>Medical Outreach (#SarahGoesToSchool):</h3>
              <p className='eventHeaderBody'>On the 30th of September, we were able to provide medication, free consultations, blood pressure tests and more to about 150 beneficiaries in our target community in Alagbado. Our medical outreach was not just about providing healthcare; it became a celebration of hope. Sarah, the daughter of one of our beneficiaries, became the first recipient of our #SarahGoesToSchool campaign. As fate would have it, it was also her birthday, and thanks to the incredible support of our volunteers and donors, we raised enough funds to enrol Sarah in school.</p>
            </Col>
          </Row>
          <Row className='d-flex flex-row align-items-center mb-3'>
            <Col className='fitted'><img src={Blood} alt='A past event' className='eventImg'/></Col>
            <Col>
              <h3 className='eventHeaderTxt'>Blood Drive:</h3>
              <p className='eventHeaderBody'>We contributed to life-saving efforts at Massey Children's Hospital by donating pints of blood during our impactful blood drive on the 2nd of December.</p>
            </Col>
          </Row>
          <a href='/impact' className='eventHeaderTxt align-self-end mb-5'>View more...</a>
          <h2 className='eventHeader subHeader raleway' id="eventHeader">IMPACT</h2>
          <ul>
            <li className='newEventTxt mb-2'>Community Outreach: Addressed immediate needs like food, education, and healthcare while integrating mental health education into rural communities.</li>
            <li className='newEventTxt mb-2'>Resource Connection: Linked individuals and communities with affordable mental wellness resources to improve access and support.</li>
            <li className='newEventTxt mb-2'>Proven Impact: Over four years of transforming lives through education, advocacy, and community-driven solutions.</li>
            <li className='newEventTxt mb-2'>Library Launch / Book Donation Drive: Through the support of our great community through book  and monetary donations , we surprised the bright students at Harrobs primary school with the creation of a library for the great minds to grow.</li>
            <li className='newEventTxt mb-2'>School Visits: Empowering young minds with an engaging talk on mental health, discipline and careers.</li>
          </ul>
        </Container>
    </>
  )
}