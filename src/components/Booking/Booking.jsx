import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import Spinner from './SpinnerLoad';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';

const firebaseConfig = {
  apiKey: "AIzaSyCcGRDmoxZxK2TPSK3rDI5QCDy5WV4ZpiU",
  authDomain: "mitsuito-s-booking-system.firebaseapp.com",
  projectId: "mitsuito-s-booking-system",
  storageBucket: "mitsuito-s-booking-system.appspot.com",
  messagingSenderId: "201372650991",
  appId: "1:201372650991:web:a3f5a49842ebd2fd7dfa1a"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filterPassedDate = (date) => {
    const currentDate = new Date();
    return date >= currentDate;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSpinner(true)

    const firstName = document.getElementById('formGridName').value;
    const lastName = document.getElementById('formGridLastName').value;
    const email = document.getElementById('formGridEmail').value;
    const contact = document.getElementById('formGridContact').value;
    const tableFor = document.getElementById('formGridTable').value;
    const dateTime = selectedDate;

    try {
      const docRef = await addDoc(collection(firestore, 'reservations'), {
        firstName,
        lastName,
        email,
        contact,
        tableFor,
        dateTime,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setShowSuccessMessage(true);
      setShowSpinner(false);

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='paddings innerWidth'>
      <h1 className='booking-title'>
        <span>Book a table</span> and join us!
      </h1>
      {showSpinner ? (
        <Spinner />
      ) : (
        showSuccessMessage ? (
          <div className={`success-message ${showSuccessMessage ? 'show' : ''}`}>
            Tu reserva fue hecha con éxito.
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridName'>
                <Form.Label className='form-text'>First Name</Form.Label>
                <Form.Control placeholder='Enter first name' required />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridLastName'>
                <Form.Label className='form-text'>Last Name</Form.Label>
                <Form.Control placeholder='Enter last name' required />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formGridEmail'>
              <Form.Label className='form-text'>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' required />
            </Form.Group>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridContact'>
                <Form.Label className='form-text'>Contact</Form.Label>
                <Form.Control placeholder='Enter phone number' required />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridTable'>
                <Form.Label className='form-text'>Table for...</Form.Label>
                <Form.Select defaultValue='Choose...' required>
                  <option value="">Number of diners</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7+ (Requires special booking)">7 + (Requires special booking)</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label className='form-text'>Date and Time</Form.Label>
                <div className='mb-3'>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat='HH:mm'
                    dateFormat='MMMM d, yyyy h:mm aa'
                    minDate={null}
                    minTime={new Date().setHours(10, 0)}
                    maxTime={new Date().setHours(22, 0)}
                    filterDate={filterPassedDate}
                    required
                  />
                </div>
              </Form.Group>
            </Row>
            <div className='form-text'>
              <span>Important!:</span> Reservations must be made one day in advance.
              Mitsuito's Ramen Bar reserves the right to cancel a citation if it
              does not comply with the rules.
            </div>

            <Form.Group className='mb-3' id='formGridCheckbox'>
              <Form.Check className='form-text' type='checkbox' label='I agree to the terms and conditions' required />
            </Form.Group>

            <Button className='button' type='submit'>
              Make reservation
            </Button>
          </Form>
        )
      )}
    </div>
  );
}

export default Booking;
