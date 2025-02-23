import React, { useEffect, useState } from 'react'
import './UploadJobs.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { allJobsAdded, fetchUserAddedJobs, userAddedJobs } from '../../services/functionAPI';


const UploadJobs = ({userID}) => {
    
    const [jobData,setJobData]=useState({
        jobTitle:"",
        companyName:"",
        companyLogo:"",
        jobType:"",
        jobLocation:"",
        jobDescription:"",
        jobSkills:"",
        jobExperienceLevel:"",
        jobSalary:""
    })

    const [allJobs,setAlljobs]=useState([])

    const [error,setError]=useState("")


    let resetState=()=>{
        setJobData({
            jobTitle:"",
            companyName:"",
            companyLogo:"",
            jobType:"",
            jobLocation:"",
            jobDescription:"",
            jobSkills:"",
            jobExperienceLevel:"",
            jobSalary:""
        })
    }

    const fetchUserJobs=async()=>{
        if(userID){
            const serverResponce=await fetchUserAddedJobs(userID)
            if(serverResponce.status>=200&&serverResponce.status<=300){
                setAlljobs(serverResponce.data)
            }else{
                console.log("Not a valid ID!")
            }
        }
    }
    

    const UploadJobs=async()=>{
       
        if(userID){
           try {
            let currentDate=new Date()
            let convertedDate=currentDate.toLocaleString("en-IN")
         if(jobData.jobTitle&&jobData.companyName&&jobData.companyLogo&&jobData.jobType&&jobData.jobLocation&&jobData.jobDescription&&jobData.jobSkills&&jobData.jobExperienceLevel&&jobData.jobSalary){

            let payload={jobData,convertedDate,applicants:[],userID:userID}
            allJobs.userJobs.push(payload)
            await userAddedJobs(userID,allJobs)
            await allJobsAdded(payload)
            toast.success("Job added!")
            console.log(allJobs)
            resetState()
            
           }else{
            setError("All fields are required!")
           }
           } catch (error) {
            console.log(error)
           }
        }else{
            toast.error("Login to add jobs!")
        }
    }


    useEffect(()=>{
        fetchUserJobs()
    },[])

    




    return (
        <div className='upload-job-parent'>
            <div className="upload-job-heading">
                <h1>Publish Job Vacancy!</h1>
                <img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" />
            </div>
            <hr />
            <p className='text-danger'>{error}</p>
            <div className="form-div">
               
                <div className="job-title">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Job title"
                        className="mb-3 w-100"
                    >
                        <Form.Control value={jobData.jobTitle} className='input-box' type="text" placeholder="Job title" onChange={(e)=>setJobData({...jobData,jobTitle:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Company Name"
                        className="mb-3 w-100"
                    >
                        <Form.Control value={jobData.companyName} className='input-box' type="text" placeholder="Company Name" onChange={(e)=>setJobData({...jobData,companyName:e.target.value})} />
                    </FloatingLabel>
                </div>
                <div className="logo">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Company Logo"
                        className="mb-3 w-100"
                    >
                        <Form.Control value={jobData.companyLogo} className='input-box' type="text" placeholder="Company Logo" onChange={(e)=>setJobData({...jobData,companyLogo:e.target.value})} />
                    </FloatingLabel>
                    <select value={jobData.jobType} name="" id="" className='w-100' onChange={(e)=>setJobData({...jobData,jobType:e.target.value})}>
                        <option value="" disabled selected>Select type</option>
                        <option value="Full time">Full time</option>
                        <option value="Part time">Part time</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <div className="job-location">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Work Location"
                        className="mb-3 w-100"
                    >
                        <Form.Control value={jobData.jobLocation} className='input-box' type="text" placeholder="Work Location" onChange={(e)=>setJobData({...jobData,jobLocation:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Job Description " className='w-100'>
                        <Form.Control value={jobData.jobDescription} className='input-box'
                            as="textarea"
                            placeholder="Job Description "
                            style={{ height: '100px' }}
                            onChange={(e)=>setJobData({...jobData,jobDescription:e.target.value})}
                        />
                    </FloatingLabel>
                </div>
                <div className="skills-required">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Required Skills"
                        className="mb-3 w-100"
                    >
                        <Form.Control value={jobData.jobSkills} className='input-box' type="text" placeholder="Required Skills" onChange={(e)=>setJobData({...jobData,jobSkills:e.target.value})} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Experience Level"
                        className="mb-3 w-100"
                    >
                        <Form.Control value={jobData.jobExperienceLevel} className='input-box' type="text" placeholder="Experience Level" onChange={(e)=>setJobData({...jobData,jobExperienceLevel:e.target.value})} />
                    </FloatingLabel>
                </div>
                <div className="salary-job">
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Salary"
                        className="mb-3 w-100"
                    >
                        <Form.Control value={jobData.jobSalary} className='input-box' as="textarea" placeholder="Salary" onChange={(e)=>setJobData({...jobData,jobSalary:e.target.value})} />
                    </FloatingLabel>
                    <Button variant="primary" className='w-100' onClick={UploadJobs}>Add job</Button>
                </div>
            </div>

        </div>
    )
}

export default UploadJobs
