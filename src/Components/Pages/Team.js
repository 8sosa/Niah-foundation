import React, {useEffect} from 'react'
import './Team.css'
import { Col, Container, Row } from 'react-bootstrap'
import Founder from '../../Images/niah.jpg'
import Ladipo from '../../Images/ladipo.jpg'
import Princess from '../../Images/princess.jpg'
import Oke from '../../Images/okre.jpg'
import Bello from '../../Images/bello.jpg'
import Emem from '../../Images/emem.png'
import Placeholder from '../../Images/ph.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);

  const team = [
    { id: 1, firstName: "Ifeoluwa", lastName: "Olutayo-Olaoye", src: Placeholder },
    { id: 2, firstName: "Jessica", lastName: "Audu", src: Placeholder },
    { id: 3, firstName: "Jesudamilola", lastName: "Ladipo", src: Ladipo },
    { id: 4, firstName: "Ememobong", lastName: "Umanah", src: Emem },
    { id: 5, firstName: "Princess", lastName: "Briggs", src: Princess },
    { id: 6, firstName: "Temitope", lastName: "Bello", src: Bello },
    { id: 7, firstName: "Oluwadamilola", lastName: "Oke", src: Oke },
];

  return (
    <>
      <Container className='hero'>
        <h1 className='heroHeader raleway'>THE FOUNDATION TEAM</h1>
      </Container>
      <Container className='greenBg1'>
        <Row data-aos="fade-up">
          <Col xs={12} sm={12} md={12} lg={4} className='d-flex flex-column align-items-center jcc'>
            <img src={Founder} alt='CHENANIAH BAMISHILE' className='founder1Img' />
            <span className='founder1Txt raleway hideOnMobile'>Founder</span>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} className='d-flex flex-column align-items-center jcfs'>
            <h1 className='founder1Header raleway'>CHENANIAH <span className='bold'>BAMISHILE</span></h1>
            <span className='founder1Body openSans'>Chenaniah Bamishile is a mental health awareness advocate and founder of Niah Foundation, a nonprofit organisation dedicated to promoting mental health awareness through a unique approach—addressing the immediate needs of people and equipping them with vital mental health information. Whether through school renovations, food palliative package distributions, period poverty alleviation outreaches, blood donation drives, medical outreaches, or educational sessions at correctional facilities and schools, Chenaniah and her team consistently strive to meet needs and raise awareness.</span>
            <span className='founder1Body openSans'>Recent programs include period poverty alleviation outreaches across two halfway homes for domestic violence survivors and several public schools. She also organised a food donation drive for over 100 widows. Committed to educating the girl child, Chenaniah teaches girls in public schools about mental health and hosts skill empowerment programs for them.</span>
            <span className='founder1Body openSans'>A serial volunteer, Chenaniah dedicates much of her time to organisations such as Lagos Food Bank, Irede Foundation, Safety for Every Girl Foundation, Charis Foundation, Selfless Service Foundation, and Nana-Hauwa Foundation, among others. She is an HR consultant at KPMG West Africa, co-founder of an ed-tech startup, a UNICEF youth ambassador, a UN Women delegate, a writer, podcaster, baker, content creator, and project manager.</span>
            <span className='founder1Body openSans'>With the tagline “Be Kind,” Chenaniah is passionate about helping others and believes kindness is the first step toward an ideal world. A proud alumna of Covenant University, she studied Human Resources Management with a minor in Industrial Relations. She is a chartered HR practitioner with over 18 certifications.</span>
          </Col>
        </Row>
      </Container>
      <Container className='team origins'>
        <h1 className='yt pageHeader raleway shadow1'>THE FOUNDATION TEAM</h1>
        <Row className='w100'>
          {team.map((member) => (
            <Col xs={12} sm={6} md={4} lg={3} className='teamImgDiv' key={member.id}>
              <img src={member.src} alt='Title of the vlog' className='teamImg' />
              <h3 className='teamBody raleway shadow1'>{member.firstName}<span className='bold1'> {member.lastName}</span></h3>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className='greenBg1'>
        <h1 className='sectionHeader'>VOLUNTEER OF THE MONTH</h1>
          <div className='d-flex flex-column align-items-center fitted'>
          <img src={Princess} alt='CHENANIAH BAMISHILE' className='teamImg' />
          <h3 className='teamBody raleway shadow1'>Princess <span className='bold1'>Briggs</span></h3>
          </div>
      </Container>
    </>
  )
}