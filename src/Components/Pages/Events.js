import React from 'react'
import { Container } from 'react-bootstrap'
import './Events.css'
import EventImg from '../../Images/HPicture.png'
export default function Events() {
  return (
    <>
        <Container className='eventsPage'>
            <h1 className='pageHeader raleway'>Events</h1>
            <div className='d-flex flex-column w100 mb-5'>
              <div className='eventGroupHeader'>
                <h2 className='eventGroupHeaderTxt raleway m-0'>Upcoming events</h2>
                <hr className='line'/>
              </div>
              <div className='d-flex flex-column w100 mb-5'>
                <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
                <h4 className='eventHeader subHeader raleway'>Event 1</h4>
                <span className='eventBody raleway'>19th November 2099</span>
              </div>
              <div className='d-flex flex-column w100 mb-5'>
                <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
                <h4 className='eventHeader subHeader raleway'>Event 2</h4>
                <span className='eventBody raleway'>19th November 2099</span>
              </div>
            </div>
            <div className='d-flex flex-column w100 mb-5'>
              <div className='eventGroupHeader'>
                <h2 className='eventGroupHeaderTxt raleway m-0'>Previous events</h2>
                <hr className='line'/>
              </div>
              <div className='d-flex flex-column w100 mb-5'>
                <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
                <h4 className='eventHeader subHeader raleway'>Event 1</h4>
                <span className='eventBody raleway'>19th November 2099</span>
              </div>
              <div className='d-flex flex-column w100 mb-5'>
                <img src={EventImg} alt='Child getting blood pressure checked' className='eventImg' />
                <h4 className='eventHeader subHeader raleway'>Event 2</h4>
                <span className='eventBody raleway'>19th November 2099</span>
              </div>
            </div> 
        </Container>
    </>
  )
}