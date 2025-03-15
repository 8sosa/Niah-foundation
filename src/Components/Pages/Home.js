import React, {useEffect} from 'react';
import './Home.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MissionImg from '../../Images/Picture2.png'
import TeamImg from '../../Images/hometeam.jpg'
import Pad from '../../Images/pad.jpeg'
import School from '../../Images/school.jpg'



export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);


  return (
    <>
        <section className='homeHeroSection'>
            <h1 className='homeHeroHeader'>NIAH FOUNDATION</h1>
            <p className='homeHeroText'>“Empowering communities through compassion and action. At Niah Foundation, we champion mental health awareness, special needs inclusion, and holistic wellness for communities across Nigeria. Let’s build a world where every voice matters and every action inspires change.”</p>
            {/* <div className='homeHeroBtnBox'>
                <div className='homeHeroBtn'>CURIOUS</div>
                <div className='homeHeroBtn'>INTERESTED?</div>
            </div> */}
        </section>
        <section className='greenGradientSection mt-4'>
          <Row className='w100'>
            <Col className='col1'>
                <span className='gradientTxt gradientTxtSub'>1 in 5 Nigerians face mental health challenges annually</span>
                <span className='gradientTxt'>We’re committed to breaking the stigma and providing support through awareness and action.</span>
            </Col>
            <Col className='col2'>
                <span className='gradientTxt gradientTxtSub'>40+ Children Empowered Through Education and Outreach</span>
                <span className='gradientTxt'>From skill empowerment programs for girls to mental health education in public schools and halfway homes for survivors, we’re shaping brighter futures.</span>
            </Col>
            <Col className='col3'>
                <span className='gradientTxt gradientTxtSub'>3,000+ Lives Impacted</span>
                <span className='gradientTxt'>Through mental health campaigns, workshops, and resources.</span>
            </Col>
          </Row>
        </section>
        <section className='mosaicBg mt-5 mb-5 d-flex flex-column gap-5'>
          <h1 className='OFHeader'>Our <span className='peachHeader'>Foundation</span></h1>
          <p className='OFDesc mt-4'>Driving inclusion, fostering mental health awareness, and inspiring systemic change for special needs communities in Africa. Together, we nurture compassion, equity, and unity for a brighter tomorrow.</p>
          <Row className='w100 gap-5'>
            <Col xs={12} md={6} className='d-flex flex-column gap-5'>
              <div className='boxDiv'>
                <h2 className='peachHeader1'>Mission</h2>
                <p className='OFDesc'>To integrate mental health awareness into African households, advancing the inclusion of special needs individuals across communities.</p>
              </div>
              <div className='boxDiv m-0'>
                <h2 className='peachHeader1'>VISION</h2>
                <p className='OFDesc' >To lead Africa's conversation on mental health, shaping inclusive systems and sustainable change.</p>
              </div>
            </Col>
            <Col>
                <img src={MissionImg} alt='Us doing good' className='MissionImgBox'/>
            </Col>
          </Row>
          <div className='boxDiv1'>
            <h2 className='peachHeader1'>OBJECTIVES</h2>
            <p className='OFDesc'>Raise awareness of mental health in underrepresented communities.</p>
            <p className='OFDesc'>Champion the inclusion of special needs individuals.</p>
            <p className='OFDesc'>Build collaborative systems of care and support.</p>
          </div>
          <span className='OFDesc mb-4' data-aos="fade-up">* Did you know that the Niah Foundation has benefited over 1,000 people, transforming lives across Nigeria, supporting over 300 women, including widows and survivors of domestic violence, through mental health resources, food donation drives, and empowerment programs?</span>
        </section>
        <section className='greenBg pt-5 pb-5'>
          <h1 className='greenBgHeader mb-4 mt-3'>NIAH FOUNDATION TEAM</h1>
          <Row className='greenBgRow mb-3 remgap2'>
            <Col xs={12} md={6}><img src={TeamImg} alt='Us doing good' className='greenBgPic'/></Col>
            <Col className='greenBgTxt d-flex flex-column justify-content-center'>Meet the passionate individuals driving change. Our diverse team is dedicated to promoting mental health awareness, inclusion, and holistic well-being across Africa. With expertise spanning advocacy, education, and community outreach, we strive to create a sustainable impact. Together, we address pressing needs, empower marginalised groups, and champion the integration of mental health into everyday life.</Col>
          </Row>
        </section>
        <section className='mosaicBg mt-4 pb-5 d-flex flex-column'  data-aos="fade-up">
          <h1 className='eventSectionHeader mb-4 mt-4'>PAST EVENTS</h1>
          <Row className='mb-3 w100 remgap2'>
            <Col md={8}>
              <h2 className='eventHeaderTxt'>A Pad for Her Outreach:</h2>
              <p className='eventHeaderBody'>At Prismoni Comprehensive High School, our "A Pad for Her" initiative successfully provided menstrual hygiene products to 100 girls, ensuring their continued access to education without disruptions.</p>
            </Col>
            <Col><img src={Pad} alt='Us doing good' className='eventPic'/></Col>
          </Row>
          <Row className='w100 remgap2'>
            <Col md={8}>
              <h2 className='eventHeaderTxt'>School Revamp:</h2>
              <p className='eventHeaderBody'>Prismoni Comprehensive High School underwent a transformative makeover as we painted its walls and built new tables, creating a conducive and uplifting learning environment.</p>
            </Col>
            <Col><img src={School} alt='Us doing good' className='eventPic'/></Col>
          </Row>
          <a href='/events' className='eventHeaderTxt align-self-end mb-5'>View more...</a>
          <div className='donateCard mb-4'>
            <h1 className='donateCardHeader'>Make a <span className='green'>Donation</span></h1>
            <p className='donateCardBody'>Your contribution fuels hope and change. By supporting Niah Foundation, you are empowering mental health awareness, special needs inclusion, and holistic wellness initiatives across communities in Africa.</p>
            <a href='/donate'><button className='donateCardBtn'>Donate Now</button></a>
          </div>
        </section>
        {/* <section className='greenBg1 pt-5 pb-5'>
          <h1 className='eventHeader1 mb-4 mt-2'>FUTURE EVENTS</h1>
            <Row className='mb-3 w100 remgap2' >
              <Col>
                <h2 className='eventHeaderTxt'>2024 BOOK DONATION DRIVE</h2>
                <p className='eventHeaderBody'>Curabitur quis fermentum nunc, bibendum faucibus velit. Fusce sit amet sem fringilla, accumsan mi non, vestibulum arcu. Nunc in tristique arcu. Nunc eleifend tellus vitae risus pulvinar varius. Cras consequat scelerisque dapibus.</p>
              </Col>
              <Col className='eventPic'></Col>
            </Row>
            <Row className='w100 remgap2' >
              <Col>
                <h2 className='eventHeaderTxt'>2024 BOOK DONATION DRIVE</h2>
                <p className='eventHeaderBody'>Curabitur quis fermentum nunc, bibendum faucibus velit. Fusce sit amet sem fringilla, accumsan mi non, vestibulum arcu. Nunc in tristique arcu. Nunc eleifend tellus vitae risus pulvinar varius. Cras consequat scelerisque dapibus.</p>
              </Col>
              <Col className='eventPic'></Col>
            </Row>
            <h1 className='eventHeader1 mb-4 mt-5'>JOIN US IN THE FIELD</h1>
            <Row className='w100 remgap2' data-aos="fade-up">
              <Col className='d-flex flex-column align-items-center'>
                <div className='newEventImg'></div>
                <h4 className='newEventHeader'>BLOOD DRIVE</h4>
                <span className='newEventTxt'>10th April 2025 - Jakande, Lekki</span>
              </Col>
              <Col className='d-flex flex-column align-items-center'>
                <div className='newEventImg'></div>
                <h4 className='newEventHeader'>BLOOD DRIVE</h4>
                <span className='newEventTxt'>10th April 2025 - Jakande, Lekki</span>
              </Col>
              <Col className='d-flex flex-column align-items-center'>
                <div className='newEventImg'></div>
                <h4 className='newEventHeader'>BLOOD DRIVE</h4>
                <span className='newEventTxt'>10th April 2025 - Jakande, Lekki</span>
              </Col>
            </Row>
        </section> */}
        <section className='mosaicBg1 mt-4 pb-5 d-flex flex-column align-items-center'>
          {/* <h1 className='header1'>WHAT THE STREETS ARE SAYING</h1>
          <Row className='remgap2'>
            <Col>
              <p className='body1'>“Morbi a nisl in tortor convallis semper. Nullam et pulvinar orci, ac ultrices lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id egestas enim.”</p>
              <p className='body1'><span className='purple'>Wale</span> from <span className='peach'>Agbero Boys FC</span></p>
            </Col>
            <Col>
              <p className='body1'>“Morbi a nisl in tortor convallis semper. Nullam et pulvinar orci, ac ultrices lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id egestas enim.”</p>
              <p className='body1'><span className='purple'>Wale</span> from <span className='peach'>Agbero Boys FC</span></p>
            </Col>
            <Col>
              <p className='body1'>“Morbi a nisl in tortor convallis semper. Nullam et pulvinar orci, ac ultrices lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id egestas enim.”</p>
              <p className='body1'><span className='purple'>Wale</span> from <span className='peach'>Agbero Boys FC</span></p>
            </Col>
          </Row> */}
          <div className='subscribeCard'>
            <h1 className='donateCardHeader mb-4'>JOIN OUR <span className='green'>NEWSLETTER</span></h1>
            <Form className='newsletterForm mont'>
              <Form.Control className='input mb-3' name="name" type="text" placeholder="Full Name *" autoComplete='true'/>
              <Form.Control className='input mb-3' name="email" type="text" placeholder="Email Address *" autoComplete='true'/>
              <Button type='submit' className='donateCardBtn mt-4'>Subscribe</Button>
            </Form>
          </div>
        </section>
    </>
  )
}