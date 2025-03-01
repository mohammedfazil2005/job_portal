
import { Table } from 'react-bootstrap'
import './AppliedJobs.css'
import { useEffect, useState } from 'react'
import { fetchAllJobs, userProfile } from '../../services/functionAPI'
import { useNavigate } from 'react-router-dom'

const AppliedJobs = ({ userID }) => {

  const [job,setJob]=useState([])
  const [filterJobs,setFilterJob]=useState([])
  const navigate=useNavigate()

  const fetchUserJob=async()=>{
    if(userID){
      try {
        const serverResponce=await userProfile(userID)
        setJob(serverResponce.data.userAppliedJobs)
      } catch (error) {
        
      }
    }else{
      navigate('/')
    }
  }

  const fetchJobs=async()=>{
   if(userID){
    try {
      const serverResponce=await fetchAllJobs()
      setFilterJob(serverResponce.data)
    } catch (error) {
      console.error(error);
      
    }
   }else{
    navigate('/')
   }
  
  }


  



  useEffect(()=>{
    fetchUserJob()
    fetchJobs()
  },[userID])

    return (
        <div className='job-table'>
         {job.map((a,index)=>{
          let comparedVJob=filterJobs.filter((b)=>b.id==a.jobId)
          return(
           comparedVJob.map((b)=>(
            <div className='job-table-details' key={index+1}>
             {/* <img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" /> */}
            
             <img src={b.jobData.companyLogo} alt="" />
             <div>
            <h6>{b.jobData.jobTitle}</h6>
            <h6>{a.status}</h6>
             </div>
            
            
      
            </div>
               
           ))
          )
         
        
         })}
        </div>

    )
}

export default AppliedJobs
