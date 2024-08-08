import React, {useEffect} from 'react';
import './Home.css';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);


  return (
    <>
        <section className='homeHeroSection'>
            <h1 className='homeHeroHeader'>NIAH FOUNDATION</h1>
            <p className='homeHeroText'>“Empowering communities through compassion and action. Our mission is to drive positive change by fostering education, supporting mental health, and cultivating a spirit of unity. Together, we strive to create a brighter future for all, one act of kindness at a time." - Chat GPT</p>
            <div className='homeHeroBtnBox'>
                <div className='homeHeroBtn'>CURIOUS</div>
                <div className='homeHeroBtn'>INTERESTED?</div>
            </div>
        </section>
        <section className='greenGradientSection mt-4'>
          <Row className='w100'>
            <Col className='col1'>
              <span className='gradientTxt' > <span className='gradientTxtSub'>34%</span> Phasellus sit amet laoreet nunc, sed vehicula diam. Ut at quam sit amet diam mattis interdum nec vel.</span>
              <h3 className='gradientTxt1'>SOME <span className='gradientTxt1sub'>MAGAZINE</span></h3>
            </Col>
            <Col className='col2'>
              <span className='gradientTxt'>  <span className='gradientTxtSub'>40 million</span> Phasellus sit amet laoreet nunc, sed vehicula diam. Ut at quam sit amet diam mattis interdum nec vel.</span>
              <h3 className='gradientTxt1'>SOME <span className='gradientTxt1sub'>MAGAZINE</span></h3>
            </Col>
            <Col className='col3'>
              <span className='gradientTxt'> Phasellus sit amet laoreet nunc, sed <span className='gradientTxtSub'>12,000</span> diam. Ut at quam sit amet diam mattis interdum nec vel.</span>
              <h3 className='gradientTxt1'>SOME <span className='gradientTxt1sub'>MAGAZINE</span></h3>
            </Col>
          </Row>
        </section>
        <section className='mosaicBg mt-5 mb-5'>
          <h1 className='OFHeader'>Our <span className='peachHeader'>Foundation</span></h1>
          <p className='OFDesc mt-4'>“Empowering communities through compassion and action. Our mission is to drive positive change by fostering education, supporting mental health, and cultivating a spirit of unity. Together, we strive to create a brighter future for all, one act of kindness at a time." - Chat GPT</p>
          <Row className='w100' data-aos="fade-up">
            <Col className='d-flex flex-column justify-content-space-between'>
              <div className='boxDiv'>
                <h2 className='peachHeader1'>Mission</h2>
                <p className='OFDesc'>To bring mental health awareness into every African home and as a result promote the inclusion of special needs individuals into systems in the continent.</p>
              </div>
              <div className='boxDiv m-0'>
                <h2 className='peachHeader1'>VISION</h2>
                <p className='OFDesc' >To be the foremost voice and movement on mental health in Africa.</p>
              </div>
            </Col>
            <Col className='MissionImgBox'></Col>
          </Row>
          <div className='boxDiv1' data-aos="fade-up">
            <h2 className='peachHeader1'>OBJECTIVES</h2>
            <p className='OFDesc'>Empowering communities through compassion and action. Our mission is to drive positive change by fostering education, supporting mental health, and cultivating a spirit of unity.</p>
            <p className='OFDesc'>Empowering communities through compassion and action. Our mission is to drive positive change by fostering education, supporting mental health, and cultivating a spirit of unity.</p>
          </div>
          <span className='OFDesc mb-4' data-aos="fade-up">* Did you know NIAH FOUNDATION was able to help 300 women blah blah </span>
        </section>
        <section className='greenBg pt-5 pb-5'>
          <h1 className='greenBgHeader mb-4 mt-3'>NIAH FOUNDATION TEAM</h1>
          <Row className='greenBgRow mb-3 remgap2' data-aos="fade-up">
            <Col className='greenBgPic'></Col>
            <Col className='greenBgTxt'>Sed vitae ipsum dictum odio consectetur eleifend ut sed mi. Curabitur tincidunt sed quam ac elementum. Fusce posuere facilisis turpis, ut ullamcorper turpis semper sed. Nullam id massa vel dui ornare dignissim. Phasellus sit amet laoreet nunc, sed vehicula diam. Ut at quam sit amet diam mattis interdum nec vel.</Col>
          </Row>
        </section>
        <section className='mosaicBg mt-4 pb-5 d-flex flex-column'>
          <h1 className='eventSectionHeader mb-4 mt-4'>PAST EVENTS</h1>
          <Row className='mb-3 w100 remgap2' data-aos="fade-up">
            <Col>
              <h2 className='eventHeaderTxt'>2023 BOOK DONATION DRIVE</h2>
              <p className='eventHeaderBody'>Curabitur quis fermentum nunc, bibendum faucibus velit. Fusce sit amet sem fringilla, accumsan mi non, vestibulum arcu. Nunc in tristique arcu. Nunc eleifend tellus vitae risus pulvinar varius. Cras consequat scelerisque dapibus.</p>
            </Col>
            <Col className='eventPic'></Col>
          </Row>
          <Row className='w100 remgap2' data-aos="fade-up">
            <Col>
              <h2 className='eventHeaderTxt'>2023 BOOK DONATION DRIVE</h2>
              <p className='eventHeaderBody'>Curabitur quis fermentum nunc, bibendum faucibus velit. Fusce sit amet sem fringilla, accumsan mi non, vestibulum arcu. Nunc in tristique arcu. Nunc eleifend tellus vitae risus pulvinar varius. Cras consequat scelerisque dapibus.</p>
            </Col>
            <Col className='eventPic'></Col>
          </Row>
          <a href='/events' className='eventHeaderTxt align-self-end mb-5' data-aos="fade-up">View more...</a>
          <div className='donateCard mb-4' data-aos="zoom-in">
            <h1 className='donateCardHeader'>Make a <span className='green'>Donation</span></h1>
            <p className='donateCardBody'>Integer non elementum magna. Duis rhoncus odio non iaculis mollis. Integer facilisis sollicitudin urna a pretium. Nulla efficitur luctus tristique. Sed iaculis, mi ut sagittis varius, justo lorem dignissim velit, efficitur pharetra nunc eros at velit.</p>
            <button className='donateCardBtn'>Donate Now</button>
          </div>
        </section>
        <section className='greenBg1 pt-5 pb-5'>
          <h1 className='eventHeader1 mb-4 mt-2'>FUTURE EVENTS</h1>
            <Row className='mb-3 w100 remgap2' data-aos="fade-up">
              <Col>
                <h2 className='eventHeaderTxt'>2024 BOOK DONATION DRIVE</h2>
                <p className='eventHeaderBody'>Curabitur quis fermentum nunc, bibendum faucibus velit. Fusce sit amet sem fringilla, accumsan mi non, vestibulum arcu. Nunc in tristique arcu. Nunc eleifend tellus vitae risus pulvinar varius. Cras consequat scelerisque dapibus.</p>
              </Col>
              <Col className='eventPic'></Col>
            </Row>
            <Row className='w100 remgap2' data-aos="fade-up">
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
        </section>
        <section className='mosaicBg1 mt-4 pb-5 d-flex flex-column align-items-center'>
          <h1 className='header1'>WHAT THE STREETS ARE SAYING</h1>
          <Row className='remgap2' data-aos="fade-up">
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
          </Row>
          <div className='subscribeCard' data-aos="zoom-in">
            <h1 className='donateCardHeader mb-4'>JOIN OUR <span className='green'>NEWSLETTER</span></h1>
            <span className='input mb-3'>Full Name *</span>
            <span className='input'>Email Address *</span>
            <button className='donateCardBtn mt-4'>Subscribe</button>
          </div>
        </section>
    </>
  )
}