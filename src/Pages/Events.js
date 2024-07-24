import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import './Events.css'

export default function Events() {
  return (
    <>
        <Container className='eventsPage'>
            <h1 className='pageHeader raleway'>Events</h1>
              <Accordion defaultActiveKey="0" className='accordion'>
                <Accordion.Item eventKey="0" className='eventGroup'>
                  <Accordion.Header>Upcoming events</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <h1>1</h1>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Previous events</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <h1>2</h1>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
        </Container>
    </>
  )
}