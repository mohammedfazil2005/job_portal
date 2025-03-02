import React, { useEffect, useState } from 'react'
import './AllJobsMain.css'
import { fetchAllJobs } from '../../../services/functionAPI'
import moment from 'moment'
import { CircularProgress } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AllJobsMain = ({ search,setSearch ,Uid,category,reset}) => {

  const [job, setJob] = useState([])
  const navigate=useNavigate()
  

  const fetchJobs = async () => {
    try {
      const serverResponce = await fetchAllJobs()
      setJob(serverResponce.data)
    } catch (error) {

    }
  }

  console.log(category.length)
  console.log(job)
  

  const filterdJob = job.filter((a) => {
    const matchesSearch = search.length > 0 
      ? a.jobData?.jobTitle?.toLowerCase().includes(search.toLowerCase()) 
      : true; 
  
    const matchesCategory = category.length > 0 
      ? a.jobData?.jobType?.toLowerCase().includes(category.toLowerCase()) 
      : true;
  
    return matchesSearch && matchesCategory; // Ensure both conditions are applied properly
  });



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
  }, [search,category,reset])




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
        ) :<div className='text-center mb-5 mt-3 notfound-div'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/nothing-found-here-illustration-download-in-svg-png-gif-file-formats--connection-error-404-not-pack-design-development-illustrations-6209371.png" alt="" />
       </div>

      ) : <CircularProgress />}




    </div>
  )
}

export default AllJobsMain


