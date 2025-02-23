import React, { useEffect, useState } from 'react'
import './AllJobsMain.css'
import { fetchAllJobs } from '../../../services/functionAPI'
import moment from 'moment'

const AllJobsMain = ({search}) => {

  const [job,setJob]=useState([])

  console.log(search)


  const fetchJobs=async()=>{
    try {
      const serverResponce=await fetchAllJobs()
     setJob(serverResponce.data)
    } catch (error) {
      
    }
  }

  const applyJob=(jobDetails)=>{
    console.log(jobDetails)
  }

  

  useEffect(()=>{
    fetchJobs()
  },[])




  return (
    <div className='job-box-container'>
      {job.length>0?(job.map((a,index)=>{
        const {jobData,convertedDate,applicants}=a
        
        return(
          <div className="job-box-row" key={index}>
        <div className="job-heading">
        <div className="job-heading-content">
        <img src={jobData.companyLogo} alt="" />
          <div>
            <h1>{jobData.jobTitle}</h1>
            <h6>Meta mask : {applicants.length} applicants</h6>
            </div>
        </div>
        <i className="fa-regular fa-heart"></i>
        </div>
        <div className="job-time">
            <button>{jobData.jobType}</button>
        </div>
        <div className="job-description">
            <p>{jobData.jobDescription.slice(0,100)}... </p>
        </div>
        <div className="job-salary-details">
            <h1>{jobData.jobSalary} LPA</h1>
            <p><i className="fa-regular fa-heart"></i>  Posted {moment(convertedDate, "D/M/YYYY, h:mm:ss a").fromNow()}</p>
        </div>
        <div>
        <button className='btn btn-primary' onClick={()=>applyJob(a)}>Easy Apply</button>
        </div>
      
      </div>
        )
      })):<p>Nothing found!</p>} 
     
      
    
    </div>
  )
}

export default AllJobsMain
