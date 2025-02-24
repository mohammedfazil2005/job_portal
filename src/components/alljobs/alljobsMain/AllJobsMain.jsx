import React, { useEffect, useState } from 'react'
import './AllJobsMain.css'
import { fetchAllJobs } from '../../../services/functionAPI'
import moment from 'moment'
import { CircularProgress } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AllJobsMain = ({ search,setSearch ,Uid}) => {

  const [job, setJob] = useState([])
  const navigate=useNavigate()
  

  const fetchJobs = async () => {
    try {
      const serverResponce = await fetchAllJobs()
      setJob(serverResponce.data)
    } catch (error) {

    }
  }

  let trim = search.trim()

  const filterdJob = trim ? job.filter((a) => a.jobData.jobTitle.toLowerCase().includes(search.toLowerCase())) : job

  const clearFiltered=()=>{
    setSearch("")
  }

  const applyJob = (jobDetails) => {
    if(Uid){
      sessionStorage.setItem("jobdetails",JSON.stringify(jobDetails))
      navigate('/displayjob')
    }else{
      toast.error("Login to apply jobs")
    }
  }



  useEffect(() => {
    fetchJobs()
  }, [search])




  return (
    <div className='job-box-container'>
      {job.length > 0 ? (

        filterdJob.length > 0 ? (
          filterdJob.map((data, index) => {
            const { jobData, convertedDate, applicants , userID} = data
            return (
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
                  <p>{jobData.jobDescription.slice(0, 110)}... </p>
                </div>
                <div className="job-salary-details">
                  <h1>{jobData.jobSalary} LPA</h1>
                  <p><i className="fa-regular fa-heart"></i>  Posted {moment(convertedDate, "D/M/YYYY, h:mm:ss a").fromNow()}</p>
                </div>
                <div>
                <button className='btn btn-primary' onClick={() => applyJob(data)}>{Uid==userID?"Your job":"Easy Apply"}</button>
                </div>

              </div>
            )
          })
        ) :<div className='error-image'>
          <button className='btn btn-primary' onClick={clearFiltered}>Back to home</button>
           <img src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="" />
        </div>

      ) : <CircularProgress />}




    </div>
  )
}

export default AllJobsMain


