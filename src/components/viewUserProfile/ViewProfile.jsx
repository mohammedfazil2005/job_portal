import React, { useEffect, useState } from 'react'
import './ViewProfile.css'
import { useLocation } from 'react-router-dom'
import { userProfile } from '../../services/functionAPI'
const ViewProfile = () => {

    const location=useLocation()
    const userProfileID=location.state.userProfileID
    const [data,setData]=useState(null)

        const fetchUserProfile=async()=>{
           try {
            const serverResponce=await userProfile(userProfileID)
            setData(serverResponce.data.userProfile)
           } catch (error) {
            console.log(error)
           }
        }

        console.log(data)

    useEffect(()=>{
        fetchUserProfile()
    },[])

  return (
    <div>
      {data? <div className='display-job-parent'>
                <div className="display-job-left-2">
      
                  <img src={data.imageURL?data.imageURL:""} alt="ss" />
                  {/* <h1>{data.name}</h1>
                  <div>
                    <p><i className="fa-solid fa-building"></i>{data.headline}</p>
                    <p><i className="fa-solid fa-location-dot"></i>{data.location}</p>
                  </div> */}
                </div>
                <div className="display-job-right">
                  <h6>User Information:</h6>
                  <div className="display-job-details">
      
                
      
      
      
                  </div>
                  <h6>Job Description:</h6>
                  <div className="display-job-description">
                    <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                  </div>
                  <div className="display-apply-button">
      
                    <button className='btn btn-primary' >Hire now!</button>
                  </div>
                </div>
              </div>:"Data not found"}
    </div>
  )
}

export default ViewProfile
