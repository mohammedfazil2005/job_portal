import React, { useEffect, useState } from 'react'
import './ViewProfile.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchAllJobs, userProfile, userProfileUpdate } from '../../services/functionAPI'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const ViewProfile = ({userID}) => {

    const location=useLocation()
    const userProfileID=location.state.userProfileID
    const [data,setData]=useState(null)
    const [adminData,setAdminData]=useState({})
    const [jobs,setJobs]=useState([])
    const navigate=useNavigate()


    const [formData,setFormData]=useState({
      applicantname:"",
      recruitername:"",
      applicantmail:"",
      message:""
    })

        const fetchUserProfile=async()=>{
           if(userID){
            try {
              const serverResponce=await userProfile(userProfileID)
              setData(serverResponce.data)
             } catch (error) {
              console.log(error)
             }
           }else{
            navigate('/')
           }
        }

        const fetchAdminProfile=async()=>{
          try {
            const serverResponce=await userProfile(userID)
            const fetchJob=await fetchAllJobs()
            setAdminData(serverResponce.data)
            setJobs(fetchJob.data)
         
          } catch (error) {
            console.error(error);
            
          }
        }
      



        const hireButton=async()=>{
          if(data&&adminData){
            try {
              const find = data.userAppliedJobs.find((a) => 
                jobs.some(job => String(job.id) === String(a['jobId']))
              );
              if(find.status=="Check email!"){
                toast.error("Already Hired!")
              }else{
                console.log(find)
                find.status="Check email!"
                await userProfileUpdate(userProfileID,data)
                const responce=await emailjs.send("service_deeor5g","template_fsk9gp8",formData,"mqBz8NAq2FOffELx6")
                toast.success("Email sent success")
              }
            
              
            } catch (error) {
              console.log(error)
            }
            
          
           
            
          }
        }





    useEffect(()=>{
        fetchUserProfile()
        fetchAdminProfile()
        
    },[])

    useEffect(() => {
      if (data && adminData) {
        setFormData({
          applicantname: data.userProfile.name || "",
          recruitername: adminData?.userProfile?.name || "",
          applicantmail:data.userProfile.email||"",
          message: `Thank you for reaching out to us! We have reviewed your application and are interested in learning more about you. We’d love to schedule a discussion to explore this opportunity further. Please let us know your availability for a quick chat. You can reach us at ${adminData?.userProfile?.email||""} Looking forward to connecting with you!`
        });
      }
    }, [data, adminData]);

  return (
    <div>
      {data? <div className='display-job-parent'>
                <div className="display-job-left-2">
      
                  <img src={data.userProfile.imageURL?data.userProfile.imageURL:""} alt="ss" />
                  
                </div>
                <div className="display-job-right">
                  <h5>User Information:</h5>
                  <div className="display-job-details-2">
                    <p><span>Name:  </span>{data.userProfile.name}</p>
                    <p><span>Title:</span> {data.userProfile.headline}</p>
                    <p><span>Location</span>{data.userProfile.location}</p>
                    <p><span>Contact:</span>{data.userProfile.phone}</p>
                  </div>
                  <h5 className='mt-3'>Qualifications</h5>
                  <div className="display-job-description-2">
                      {data.userProfile.education.split('\n').map((a,index)=>(
                        <p key={index}>{a}</p>
                      ))}
                    </div>
                    <h5 className='mt-3'>Skills</h5>
                    <div className="display-job-description-2">
                    {data.userProfile.skills.split('\n').map((a,index)=>(
                      <p key={index}>{a}</p>
                    ))}
                    </div>
                    <h5 className='mt-3'>Experience</h5>
                    <div className="display-job-description-2">
                    {data.userProfile.experience.split('\n').map((a,index)=>(
                      <p key={index}>{a}</p>
                    ))}
                  </div>
                  <div className="display-apply-button">
                    <button className='btn btn-primary' onClick={hireButton}>Hire now!</button>
                  </div>
                </div>
              </div>:"Data not found"}
    </div>
  )
}

export default ViewProfile
