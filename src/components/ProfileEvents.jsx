import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import dayjs from "dayjs"
import CreateEvent from "./CreateEvent"
import { useState } from "react"
import UploadImg from "./UploadImg"
import axios from "axios"

function ProfileEvents({userInfo}) {

  let attendingList = null
  userInfo ? (attendingList = userInfo.eventsAttending.map((event, idx) => {
    return (
      <>
        <div  key={`attendinglist-${idx}`} className='cardContainer'>
          <Card style={{ width: '18rem', color:'white' }}>
              
            <Card.Img variant="top" src={event.image} />
            <Card.Body>

              <Card.Title style={{fontSize:'25px'}}>{event.title}</Card.Title>
              <Card.Text>{event.category} </Card.Text>
              {/* <Card.Text>{event.description} </Card.Text> */}

              <ListGroup variant="flush">

                <ListGroup.Item>{event.city}, {event.state} {event.zipcode}</ListGroup.Item>
                <ListGroup.Item>{dayjs(event.date).format('MMMM D, YYYY')}</ListGroup.Item>
                <ListGroup.Item>Attendees: {event.attendees ? event.attendees.length : 'no attendees'} </ListGroup.Item>

              </ListGroup>

              <Button href={`/events/${event._id}`} className='btn-block text-uppercase mb-2 rounded-pill shadow-sm' variant="outline-dark">See Details</Button>

            </Card.Body>
          </Card>
        </div>
      </>
    )
  })) : (attendingList = <h3>You're not attending any events...</h3>)

    
  let hostingList = null
  userInfo ? (hostingList = userInfo.hostedEvents.map((event, idx) => {
    return (
      <div key={`hostinglist-${idx}`} className="cardContainer">

        <Card style={{ width: "18rem" }}>

          <Card.Img variant="top"src={event.image}/>

          <Card.Body>

            <Card.Title style={{ fontSize: "25px" }}>{event.title} </Card.Title>
            <Card.Text>{event.category} </Card.Text>
            {/* <Card.Text>{event.description} </Card.Text> */}

            <ListGroup variant="flush">

              <ListGroup.Item>{event.city}, {event.state} {event.zipcode} </ListGroup.Item>
              <ListGroup.Item> {dayjs(event.date).format("MMMM D, YYYY")} </ListGroup.Item>
              <ListGroup.Item>  Attendees: {event.attendees? event.attendees.length : "no attendees"}</ListGroup.Item>

            </ListGroup>

            <Button href={`/events/${event._id}`} className="btn-block text-uppercase mb-2 rounded-pill shadow-sm" variant="outline-dark" > See Details </Button>
            
          </Card.Body>

        </Card>

      </div>
    )
  })) : (hostingList = <h3>You're not hosting any events...</h3>)

  return (
    <>
      {/* <h3 className="BebasNeue" style={{color:"white"}}>Your Events: </h3> */}
      <Tabs id="uncontrolled-tab-example" className="mb-3 flex-tab" defaultActiveKey="Hosting">

        <Tab eventKey="Hosting" title="Hosting">
          <div className="flex-box tab-style">{hostingList}</div>
        </Tab>

        <Tab eventKey="Attending" title="Attending">
          <div className="flex-box tab-style">{attendingList}</div>
        </Tab>

      </Tabs>
    </>
  )
}

export default ProfileEvents
