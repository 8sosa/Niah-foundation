import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Events.css';
import Eoy from '../../Images/eoy.jpg'
import Dowager from '../../Images/dowager.jpeg'
import Pad from '../../Images/pad.jpeg'
import School from '../../Images/school.jpg'
import Med from '../../Images/med.jpg'
import Blood from '../../Images/blood.jpeg'
import Food from '../../Images/food.jpeg'
import Art from '../../Images/art.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Events() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);

  const events = [
    {title: "End of Year Orphanage Party", src: Eoy, description: "We celebrated the end of the year with joy at the Modupe memorial coke home, creating memorable moments with the adults and children under the care of excellent people on the 26th of December 2024"},
    {title: "Dowager (Food) Outreach", src: Dowager, description: "To mark National Grief Awareness Day (August 30), our 'Dowager Outreach' reached 100 widows and single mothers, offering essential food items to alleviate their challenges and bring comfort to their lives."},
    {title: "A Pad for Her Outreach", src: Pad, description: "At Prismoni Comprehensive High School, our 'A Pad for Her' initiative successfully provided menstrual hygiene products to 100 girls, ensuring their continued access to education without disruptions."},
    {title: "Medical Outreach (#SarahGoesToSchool)", src: Med, description: "On the 30th of September, we were able to provide medication, free consultations, blood pressure tests and more to about 150 beneficiaries in our target community in Alagbado. Our medical outreach was not just about providing healthcare; it became a celebration of hope. Sarah, the daughter of one of our beneficiaries, became the first recipient of our #SarahGoesToSchool campaign. As fate would have it, it was also her birthday, and thanks to the incredible support of our volunteers and donors, we raised enough funds to enrol Sarah in school."},
    {title: "Blood Drive", src: Blood, description: "We contributed to life-saving efforts at Massey Children's Hospital by donating pints of blood during our impactful blood drive on the 2nd of December."},
    {title: "Food outreach", src: Food, description: "We provided foodstuff to over a 100 elderly people in the shangisha community, in an engaging and gamified format on the 24th of May"},
    {title: "Art supply drive", src: Art, description: "On the 9th of December we visited the lovely kids at the Harrobs primary school in the ketu community. We donated art supplies and had an art and mental health talk session where the students created art work for the mental health facts they learnt during this session."},
    {title: "School Revamp", src: School, description: "Prismoni Comprehensive High School underwent a transformative makeover as we painted its walls and built new tables, creating a conducive and uplifting learning environment."}
  ]

  
  return (
    <Container className='eventsPage'>
      <h1 className='pageHeader raleway'>Events</h1>
      {/* <div className='d-flex flex-column w100 mb-5' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className='eventGroupHeader'>
          <h2 className='eventGroupHeaderTxt raleway m-0'>Upcoming events</h2>
          <hr className='line'/>
        </div>
        <Row className='eventTab' md={3}>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 1</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 2</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
          <div className='d-flex flex-column mb-5'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader subHeader raleway mb-0'>Event 3</h4>
            <span className='eventBody raleway'>19th November 2099</span>
          </div>
        </Row>    
      </div> */}
      <div className='d-flex flex-column w100 mb-5' data-aos-anchor-placement="top-center">
        <div className='eventGroupHeader'>
          <h2 className='eventGroupHeaderTxt raleway m-0'>Previous events</h2>
          <hr className='line'/>
        </div>
        <Row className='eventTab'>
        {events.map((event, index) => (
          <Col className='d-flex flex-column mb-5' key={index} xs={12} md={6}>
            <img src={event.src} alt='Child getting blood pressure checked' className='eventImg' />
            <h4 className='eventHeader raleway'>{event.title}</h4>
            <span className='eventBody raleway'>{event.description}</span>
          </Col>
        ))}
        </Row>
      </div> 
    </Container>
  );
}
