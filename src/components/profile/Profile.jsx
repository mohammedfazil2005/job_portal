import { TextField } from '@mui/material'
import React from 'react'
import './Profile.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='profile-section-parent'>
      <div className="profile-section-child">
        <div>
          <div className="profile-icon-div">
            <img src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg" alt="" />
            <button className='btn btn-primary' onClick={handleShow}>Change</button>
          </div>
          <div className="profile-detail-div">
            <div>
              <h6>Full Name</h6>
              <button><i className="fas fa-edit"></i></button>
            </div>
            <h6>Professional Headline!</h6>
            <h6>Your Email Address!</h6>
            <h6>Your Phone Number!</h6>
            <h6>Your Location!</h6>
             <div className='desg-details'>
              <h3>Education</h3>
             </div>
             <div className='desg-details'>
              <h3>Experience</h3>
             </div>
             <div className='desg-details'>
              <h3>Skills</h3>
             </div>
          

          </div>

        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Full Name" className='' />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Professional Headline"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Professional Headline" className='' />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Phone Number" className='' />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Location"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Location" className='' />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Education">
        <Form.Control className='mb-3'
          as="textarea"
          placeholder="Education"
          style={{ height: '100px' }}
        />
      </FloatingLabel>


      <FloatingLabel controlId="floatingTextarea2" label="Experience">
        <Form.Control
          as="textarea"
          placeholder="Experience"
          className='mb-3'
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Skills">
        <Form.Control
          as="textarea"
          placeholder="Skills"
          className='mb-3'
          style={{ height: '100px' }}
        />
      </FloatingLabel>
     

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Profile
