import React from 'react'
import './UploadJobs.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const UploadJobs = () => {
    return (
        <div className='upload-job-parent'>
            <div className="upload-job-heading">
                <h1>Publish Job Vacancy!</h1>
                <img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" />
            </div>
            <hr />
            <div className="form-div">
                <div className="job-title">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Job title"
                        className="mb-3 w-100"
                    >
                        <Form.Control className='input-box' type="text" placeholder="Job title"/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Company Name"
                        className="mb-3 w-100"
                    >
                        <Form.Control className='input-box' type="text" placeholder="Company Name" />
                    </FloatingLabel>
                </div>
                <div className="logo">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Company Logo"
                        className="mb-3 w-100"
                    >
                        <Form.Control className='input-box' type="text" placeholder="Company Logo" />
                    </FloatingLabel>
                    <select name="" id="" className='w-100'>
                        <option value="" disabled selected>Select type</option>
                        <option value="">Full time</option>
                        <option value="">Part time</option>
                        <option value="">Internship</option>
                    </select>
                </div>
                <div className="job-location">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Work Location"
                        className="mb-3 w-100"
                    >
                        <Form.Control className='input-box' type="text" placeholder="Work Location" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Job Description " className='w-100'>
                        <Form.Control className='input-box'
                            as="textarea"
                            placeholder="Job Description "
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </div>
                <div className="skills-required">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Required Skills"
                        className="mb-3 w-100"
                    >
                        <Form.Control className='input-box' type="text" placeholder="Required Skills" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Experience Level"
                        className="mb-3 w-100"
                    >
                        <Form.Control className='input-box' type="text" placeholder="Experience Level" />
                    </FloatingLabel>
                </div>
                <div className="salary-job">
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Salary"
                        className="mb-3 w-100"
                    >
                        <Form.Control className='input-box' as="textarea" placeholder="Salary" />
                    </FloatingLabel>
                    <Button variant="primary" className='w-100'>Add job</Button>
                </div>
            </div>

        </div>
    )
}

export default UploadJobs
