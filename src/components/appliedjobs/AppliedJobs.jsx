
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
          
         {job.length>0?job.map((a,index)=>{
          let comparedVJob=filterJobs.filter((b)=>b.id==a.jobId)
          return(
           comparedVJob.map((b)=>(
            <div className='job-table-details' key={index+1}>
            
             <img src={b.jobData.companyLogo} alt="" />
             <div>
            <h6>{b.jobData.jobTitle}</h6>
            <h6>{a.status} <i className={`fa-solid fa-circle ${a.status=="pending"?'text-danger':'text'}`}></i></h6>
             </div>
            
            
      
            </div>
               
           ))
          )
         
        
         }):<div className='text-center mb-5 mt-3 notfound-div'>
         <img src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png" alt="" />
        </div>}
        </div>

    )
}

export default AppliedJobs
