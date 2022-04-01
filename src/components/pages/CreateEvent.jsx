import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function CreateEvent() {
  const navigate = useNavigate()
  // return( <h1> create event</h1>)
  const [eventForm, setEventForm] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const token = localStorage.getItem("jwt")
    console.log("token", token)
    // make the auth headers
    const options = {
      headers: {
        Authorization: token,
      },
    }
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/events/`,
        eventForm,
        options
      )
      .then((response) => {
        setEventForm({})
        const eventId = response.data[1]._id
        navigate(`/events/${eventId}`)
      })
      .catch(console.log)
  }
  
  return (
    <>
    <div style={{padding: '50px'}}>
      <Form
        className="BebasNeue createFormCard container-fluid mb-5"
        onSubmit={handleSubmit}
        style={{ color: "rgb(255,64,132)" }}
      >
        <h1 className="createCardTitle">Create Event</h1>
        <Form.Group className="mb-3" controlId="formGridTitle">
          <Form.Label>title:</Form.Label>
          <Form.Control
            type="text"
            value={eventForm.title}
            onChange={(e) =>
              setEventForm({ ...eventForm, title: e.target.value })
            }
            required
            placeholder="lan party"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>address:</Form.Label>
          <Form.Control
            type="text"
            value={eventForm.address}
            onChange={(e) =>
              setEventForm({ ...eventForm, address: e.target.value })
            }
            required
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>category:</Form.Label>
            <Form.Select
              value={eventForm.category}
              onChange={(e) =>
                setEventForm({ ...eventForm, category: e.target.value })
              }
              required
            >
              <option>Please select a category</option>
              <option value="Party">Party</option>
              <option value="Concert">Concerts</option>
              <option value="Gaming">Gaming</option>
              <option value="Comedy">Comedy</option>
              <option value="Study">Study</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>city:</Form.Label>
              <Form.Control
                type="text"
                value={eventForm.city}
                onChange={(e) =>
                  setEventForm({ ...eventForm, city: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                value={eventForm.state}
                onChange={(e) =>
                  setEventForm({ ...eventForm, state: e.target.value })
                }
                required
              >
                <option>Choose...</option>
                <option value="">N/A</option>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="number"
                value={eventForm.zipcode}
                onChange={(e) =>
                  setEventForm({ ...eventForm, zipcode: e.target.value })
                }
                required 
              />
            </Form.Group>
          </Row>

          <FloatingLabel
            controlId="floatingTextarea"
            label="description"
            className="mb-3 mt-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              value={eventForm.description}
              onChange={(e) =>
                setEventForm({ ...eventForm, description: e.target.value })
              }
              required
            />
          </FloatingLabel>

          <Form.Group as={Col} controlId="date">
            <Form.Label>Select Date:</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="date of event"
              value={eventForm.date}
              onChange={(e) =>
                setEventForm({ ...eventForm, date: e.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="time">
            <Form.Label>Select Time:</Form.Label>
            <Form.Control
              type="time"
              name="time"
              placeholder="time of event"
              value={eventForm.time}
              onChange={(e) =>
                setEventForm({ ...eventForm, time: e.target.value })
              }
              required
            />
          </Form.Group>
        </Row>

        <Button
          variant="outline-light"
          style={{ color: "rgb(255,64,132)" }}
          size="lg"
          type="submit"
          className="mb-3"
        >
          next
        </Button>
      </Form>
      </div>
    </>
  )
}
