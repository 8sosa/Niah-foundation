import React, {useEffect} from 'react'
import './Volunteer.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Picture from '../../Images/HPicture.png'
// import Placeholder from '../../Images/ph.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Volunteer() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration if needed
  }, []);

  const units = [
    {
        name: "Secretariat Department",
        responsibilities: [
            "Ensure proper and timely documentation of the proceedings of meetings of the Executive Council (Department Heads).",
            "Ensure that minutes are written in a manner that eases reference in respect of all resolutions passed or decisions taken.",
            "Ensure proper and timely documentation of the proceedings of meetings of the members of the organization.",
        ]
    },
    {
        name: "Human Resources Department",
        responsibilities: [
            "Develop and execute recruitment strategy for the Organization.",
            "Coordinate quarterly recruitment of active service volunteers.",
            "Screen and recommend for approval or rejection, to the Executives, an applicant for admission as a member of the organization.",
        ]
    },
    {
        name: "Finance & Fundraising Department",
        responsibilities: [
            "Manage all financial matters concerning the organization.",
            "Review departmental and project budgets for approval.",
            "Receive all monies due to the organization, and within 48 hours pay all such monies into the bank account maintained by the organization.",
        ]
    },
    {
        name: "Education/Training Department",
        responsibilities: [
            "Organize training programs beneficial to the excos, members, and community members of Niah Foundation.",
            "Collaborate with other organizations that can organize training.",
            "Regularly conduct trainings for volunteers, heads of departments, and community members of the organization.",
        ]
    },
    {
        name: "Logistics Department",
        responsibilities: [
            "Coordinate logistics for the Organization.",
            "Ensure dispatch and prompt delivery of letters and collaboration materials to prospective sponsors and individuals willing to work together with and for the good of the organization.",
            "Make arrangements for all technical needs for every outreach or program of the organization.",
        ]
    },
    {
        name: "Social Media Department",
        responsibilities: [
            "Ensure constant circulation and production of mental health-related content for the organization’s social media pages and website.",
            "Ensure the constant updating of information on all social media platforms as well as the official website of the organization.",
            "Create a social media calendar for all platforms and execute social media campaigns.",
        ]
    },
    {
        name: "Media Department",
        responsibilities: [
            "Ensure the production of graphic designs to meet the needs of the organization.",
            "Create and maintain a bank of graphic designs for the organization on Google Drive.",
            "Think outside the box to come up with creative ideas to raise funds and promote mental wellness.",
        ]
    },
    {
        name: "Community Engagement & Welfare Department",
        responsibilities: [
            "Maintain harmonious relationships amongst the volunteers.",
            "Serve as the community help desk for all volunteer inquiries and concerns.",
            "Encourage and check up on volunteers and executives regularly.",
        ]
    },
    {
        name: "Public Relations & Partnerships Department",
        responsibilities: [
            "Ensure innovative partnerships and sponsorships directly impact the organization with well-meaning NGOs, Corporate Bodies, Philanthropists, Celebrities, and Individuals where the situation arises.",
            "Collaborate with other organizations who share the same ideas and goals.",
            "Secure Partnerships and Sponsorships directly impacting positively on the organization.",
        ]
    },
    {
        name: "Programs Coordination Department",
        responsibilities: [
            "Plan and coordinate physical and online meetings and see to their success.",
            "Ensure the smooth planning of support and hangout sessions for community members and members of the public as circumstances permit.",
            "Ensure innovative partnerships and sponsorships directly impact the organization with well-meaning NGOs, Corporate Bodies, and Individuals where the situation arises.",
        ]
    }
];



  return (
    <>
      <Container className='greenBg1'>
        <h1 className='pageHeader raleway'>Volunteer</h1>
        <Row className='d-flex flex-column mb-4'>
          <Col>
            <img src={Picture} alt='People volunteering' className='volunteerImg' />
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <h1 className='founderHeader raleway'>Join Our Volunteer Team and Make a Difference!</h1>
            <span className='founder1Body openSans'>At Niah Foundation, we believe that everyone has the power to create change. Volunteering with us provides the opportunity to contribute to impactful initiatives across mental health awareness, inclusion, and community welfare.</span>
          </Col>
        </Row>
        <button type='submit' className='donateCardBtn raleway'>Learn More</button>
      </Container>
      <Container className='eventsPage'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='pageHeader raleway mt-3'>benefits</h1>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Personal Growth</span>: Develop new skills, gain experience, and boost your resume.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Community Impact</span>: Contribute to meaningful change within underserved communities.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Networking Opportunities</span>: Build connections with like-minded individuals and professionals.</p>
          <p className='founder1Body openSans mb-5 asfs'><span className='bodyBold'>Recognition and Rewards</span>:  Your contributions are celebrated through awards, incentives, and acknowledgement.</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='pageHeader raleway mt-4'>what it entails</h1>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Roles and Responsibilities</span>: Take on tasks specific to your chosen department.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Time Commitment</span>: Flexible schedules designed to fit your availability.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Training and Support</span>: Receive comprehensive guidance to succeed in your role.</p>
          <p className='founder1Body openSans asfs'><span className='bodyBold'>Expectations</span>: Demonstrate professionalism, punctuality, and a commitment to our values.</p>
        </div>
       </Container>
      <Container className='team origins'>
        <h1 className='yt pageHeader raleway'>units</h1>
        <Row className='w100 gap-5'>
          {units.map((unit, index) => (
            <Col xs={12} sm={6} md={5} lg={5} className='teamImgDiv' key={index}>
              {/* <img src={unit.src} alt='Title of the vlog' className='teamImg' /> */}
              <h3 className='unitHead openSans bold1'>{unit.name}</h3>
              <ul>
                {unit.responsibilities.map((resp, indec) =>(
                  <li key={index} className='unitBody openSans'>{resp}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        {/* units */}
        {/* <div>
          <Row className='mb-5'>
            <Col className='d-flex flex-column align-items-start jcsa'>
              <h3 className='unitHead openSans'>Welfare</h3>
              <p className='unitBody openSans'>Support individuals and communities through direct assistance programs.</p>
              <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Person Name</span></h4>
              <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
            </Col>
            <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
          </Row>
          <Row>
            <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
            <Col className='d-flex flex-column align-items-end jcsa'>
              <h3 className='unitHead openSans'>Fundraising</h3>
              <p className='unitBody openSans'>Drive efforts to secure resources that fuel our mission.</p>
              <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Jesudamilola Ladipo</span></h4>
              <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col className='d-flex flex-column align-items-start jcsa'>
              <h3 className='unitHead openSans'>Finance</h3>
              <p className='unitBody openSans'>Help manage budgets and ensure efficient allocation of funds.</p>
              <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Jesudamilola Ladipo</span></h4>
              <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
            </Col>
            <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
          </Row>
          <Row>
            <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
            <Col className='d-flex flex-column align-items-end jcsa'>
              <h3 className='unitHead openSans'>Logistics</h3>
              <p className='unitBody openSans'>Coordinate events, outreach programs, and resource distribution.</p>
              <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Oluwadamilola Oke</span></h4>
              <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col className='d-flex flex-column align-items-start jcsa'>
              <h3 className='unitHead openSans'>Media</h3>
              <p className='unitBody openSans'>Spread awareness through content creation, campaigns, and digital outreach.  </p>
              <h4 className='unitFoot openSans'>Unit Coordinator<span className='unitBody openSans'>: Person Name</span></h4>
              <h4 className='unitFoot openSans'>Email<span className='unitBody openSans'>: Person.name@mail.com</span></h4>
            </Col>
            <Col><img src={Placeholder} alt='A unit' className='unitImg'/></Col>
          </Row>
        </div> */}
      </Container>
      <Container className='mosaicBg1'>
        <div className='volunteerCard mt-5 mb-5'>
          <h1 className='pageHeader raleway'>Volunteer</h1>
          <Form className='w100'>
            <Form.Group className="mb-3" controlId="Enquirer Name">
                <Form.Control type="text" placeholder="Full Name" className='inputField raleway'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Enquirer Email">
                <Form.Control type="email" placeholder="Email" className='inputField raleway'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Enquirer Number">
                <Form.Control type="num" placeholder="Phone Number" className='inputField raleway'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Enquirer Location">
                <Form.Control type="text" placeholder="Location" className='inputField raleway'/>
            </Form.Group>
            <button type='submit' className='contactCardBtn raleway'>Register</button>
          </Form>
        </div>
      </Container>
    </>
  )
}