import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'



export default function Welcome({events, setEvents, currentUser}) {

  const handleClick = (event) => {
      axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${event}/${currentUser.id}/attend`)
      .then(response=>console.log(response.data))
      
  }



  const eventsList = events.map((event,idx)=>{
    return (
      <div key={`eventsList-${idx}`}>

        <Card style={{ width: '18rem' }}>

          <Card.Img variant="top" src="http://placekitten.com/150/150" />
          <Card.Body>

            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description} </Card.Text>
            <Card.Header>Information:</Card.Header>

            <ListGroup variant="flush">

              <ListGroup.Item>{event.city}, {event.state} {event.zipcode}</ListGroup.Item>
              <ListGroup.Item>{event.date}</ListGroup.Item>
              <ListGroup.Item>Attendees Count: {event.attendees.length} </ListGroup.Item>

            </ListGroup>

            <Link to={`/events/${event._id}`}><Button variant="primary">See Details</Button></Link>
            <Button onClick={()=>handleClick(event._id)} variant="primary">Attend</Button>

          </Card.Body>
          
        </Card>

      </div>
    )
  })
  
  return (
    <>

    <Carousel>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="http://placekitten.com/300/150"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="http://placekitten.com/300/150"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="http://placekitten.com/300/150"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    
    <br />

      <div className='flex-box'>
      {eventsList}
      </div>

    </>
    


    
  )
}

// make it so a user cant attend the same event twice
// conditonally render when a user clicks the attend button it changes to an unattend 
// carousel of images at top
// category filters
// flex box the events 