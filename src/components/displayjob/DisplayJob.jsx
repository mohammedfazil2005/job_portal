import React, { useEffect, useState } from 'react'
import './DisplayJob.css'
import moment from 'moment'
import { CircularProgress } from '@mui/material'

const DisplayJob = ({userID}) => {

  const [data,setData]=useState(null)

  const fetchJob=()=>{
    let jobDetails=sessionStorage.getItem("jobdetails")
    setData(JSON.parse(jobDetails))
  }

  const applyJob=(details)=>{
    console.log(details)
    console.log(userID)
  }

 
  
  useEffect(()=>{
    fetchJob()
  },[])


  return (
   <>
   {data?(
    <div className='display-job-parent'>
    <div className="display-job-left">
      
        <img src={data.jobData.companyLogo} alt="" />
        <h1>Front end developer</h1>
        <div>
          <p><i className="fa-solid fa-building"></i>{data.jobData.companyName} pvt.ltd</p>
          <p><i className="fa-solid fa-location-dot"></i>{data.jobData.jobLocation}</p>
      </div>
    </div>
    <div className="display-job-right">
      <h6>Job Information:</h6>
      <div className="display-job-details">

        <div className='display-job-details-box'>
          <div>
          <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <h2>Employee Type:</h2>
            <p>{data.jobData.jobType}</p>
          </div>
        </div>

        <div className='display-job-details-box'>
          <div>
          <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h2>Location:</h2>
            <p>{data.jobData.jobLocation}</p>
          </div>
        </div>

        <div className='display-job-details-box'>
          <div>
          <i className="fa-solid fa-tv"></i>
          </div>
          <div>
            <h2>Job Type:</h2>
            <p>{data.jobData.jobType}</p>
          </div>
        </div>

        <div className='display-job-details-box'>
          <div>
          <i className="fa-solid fa-suitcase"></i>
          </div>
          <div>
            <h2>Experience:</h2>
            <p>{data.jobData.jobExperienceLevel}</p>
          </div>
        </div>

        <div className='display-job-details-box'>
          <div>
          <i className="fa-solid fa-book"></i>
          </div>
          <div>
            <h2>Qualifications:</h2>
            <p>{data.jobData.jobQualification.split(' ').join('/')}</p>
          </div>
        </div>

        <div className='display-job-details-box'>
          <div>
          <i className="fa-solid fa-money-bill"></i>
          </div>
          <div>
            <h2>Salary:</h2>
            <p>{data.jobData.jobSalary} LPA</p>
          </div>
        </div>

        <div className='display-job-details-box'>
          <div>
          <i className="fa-solid fa-clock"></i>
          </div>
          <div>
            <h2>Date posted:</h2>
            <p> {moment(data.convertedDate, "DD/MM/YYYY, h:mm:ss").format("Do MMM, YYYY")}</p>
          </div>
        </div>

        

      </div>
      <h6>Job Description:</h6>
      <div className="display-job-description">
        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
      </div>
      <div className="display-apply-button">

        <button className='btn btn-primary' disabled={userID==data.userID} onClick={()=>applyJob(data)}>Apply Now</button>
      </div>
    </div>
  </div>
   ):(
    <CircularProgress/>
   )}
   </>
  )
}

export default DisplayJob
