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

function ProfileEvents({
  userInfo,
  handleSubmit,
  setEventForm,
  eventForm,
  imgForm,
  setImgForm,
  currentUser
}) {
  //get the event id
  let foundEvent= null 
// console.log(userInfo)
//   const foundEvent = userInfo.hostedEvents[userInfo.hostedEvents.length]

// userInfo ? foundEvent = userInfo.hostedEvents[userInfo.hostedEvents.length-1] : null
// foo.data[0].id
// console.log("userInfo", userInfo)
//   console.log(
//     "userInfohostedeventsarray",
//    userInfo["hostedEvents"]
//   )

  
  console.log(foundEvent)
  const eventImgSubmit = async (e) => {
    e.preventDefault()
    try {
      const fd = new FormData()
      fd.append("image")
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/events/${foundEvent}/upload`,
        fd
      )
    } catch (err) {
      console.log(err)
    }
  }
  let attendingList = null

  userInfo
    ? (attendingList = userInfo.eventsAttending.map((event, idx) => {
        return (
            <>
                <div key={`eventsList-${idx}`} className="cardContainer">
                    <Card style={{ width: "18rem" }}>
                    <div className="shadow">
                    <div className="shadow">
                    <Card.Img
                        variant="top"
                        src="http://placekitten.com/150/150"
                    />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "25px" }}>
                        {event.title}
                        </Card.Title>
                        <Card.Text>{event.category} </Card.Text>
                        <Card.Text>{event.description} </Card.Text>

                        <ListGroup variant="flush">
                        <ListGroup.Item>
                            {event.city}, {event.state} {event.zipcode}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {dayjs(event.date).format("MMMM D, YYYY")}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Attendees Count:{" "}
                            {event.attendees
                            ? event.attendees.length
                            : "no attendees"}{" "}
                        </ListGroup.Item>
                        </ListGroup>

                        <Button
                        href={`/events/${event._id}`}
                        className="btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        variant="outline-dark"
                        >
                        See Details
                        </Button>
                    </Card.Body>
                    </div>
                </div>
                </Card>
            </div>
            <div key={`eventsList-${idx}`} className='cardContainer'>

                <Card style={{ width: '18rem' }}>
                

                        <Card.Img variant="top" src="http://placekitten.com/150/150" />
                        <Card.Body>

                            <Card.Title style={{fontSize:'25px'}}>{event.title}</Card.Title>
                            <Card.Text>{event.category} </Card.Text>
                            <Card.Text>{event.description} </Card.Text>

                            <ListGroup variant="flush">

                            <ListGroup.Item>{event.city}, {event.state} {event.zipcode}</ListGroup.Item>
                            <ListGroup.Item>{dayjs(event.date).format('MMMM D, YYYY')}</ListGroup.Item>
                            <ListGroup.Item>Attendees Count: {event.attendees ? event.attendees.length : 'no attendees'} </ListGroup.Item>

                            </ListGroup>

                            <Button href={`/events/${event._id}`} className='btn-block text-uppercase mb-2 rounded-pill shadow-sm' variant="outline-dark">See Details</Button>

                        </Card.Body>
                </Card>
            </div>
        </>
        )
      }))
    : (attendingList = <h3>You're not attending any events...</h3>)

  let hostingList = null

  userInfo
    ? (hostingList = userInfo.hostedEvents.map((event, idx) => {
        return (
          <div key={`eventsList-${idx}`} className="cardContainer">
            <Card style={{ width: "18rem" }}>
              <div className="shadow">
                <div className="shadow">
                  <Card.Img
                    variant="top"
                    src="http://placekitten.com/150/150"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "25px" }}>
                      {event.title}
                    </Card.Title>
                    <Card.Text>{event.category} </Card.Text>
                    <Card.Text>{event.description} </Card.Text>

                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        {event.city}, {event.state} {event.zipcode}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {dayjs(event.date).format("MMMM D, YYYY")}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Attendees Count:{" "}
                        {event.attendees
                          ? event.attendees.length
                          : "no attendees"}
                      </ListGroup.Item>
                    </ListGroup>

                    <Button
                      href={`/events/${event._id}`}
                      className="btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      variant="outline-dark"
                    >
                      See Details
                    </Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        )
      }))
    : (hostingList = <h3>You're not hosting any events...</h3>)

  return (
    <>
      <h3 className="BebasNeue">Your Events: </h3>
      <Tabs
        id="uncontrolled-tab-example"
        className="mb-3 flex-tab"
        defaultActiveKey="Hosting"
      >
        <Tab eventKey="Hosting" title="Hosting">
          <div className="flex-box tab-style">{hostingList}</div>
        </Tab>
        <Tab eventKey="Attending" title="Attending">
          <div className="flex-box tab-style">{attendingList}</div>
        </Tab>
        <Tab eventKey="createEvent" title="Create Event">
          <div className="flex-box tab-style">
<<<<<<< HEAD
            <CreateEvent
              handleSubmit={handleSubmit}
              setEventForm={setEventForm}
              eventForm={eventForm}
            />
=======
            {imgForm ? (
              <UploadImg />
            ) : (
              <CreateEvent
                handleSubmit={handleSubmit}
                setEventForm={setEventForm}
                eventForm={eventForm}
                setImgForm={setImgForm}
              />
            )}
>>>>>>> 2e8a19779564898976d1b890df3d952f4a93caa4
          </div>
        </Tab>
      </Tabs>
    </>
  )
}

export default ProfileEvents
