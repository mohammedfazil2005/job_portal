import React, { useEffect, useState } from 'react'
import './Applicants.css'
import { userProfile } from '../../services/functionAPI'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Applicants = ({ userID,setUserProfileID }) => {

    const [applicant, setApplicants] = useState([])
    const navigate=useNavigate()

    const fetchApplicants = async () => {
        if (userID) {
            try {
                const serverResponce = await userProfile(userID)
                setApplicants(serverResponce.data.userJobs)
               
            } catch (error) {
                console.log(error)
            }
        }else{
            toast.warning("Login to continue")
            navigate('/')
        }
    }

    const fetchUserResume=(id)=>{
        setUserProfileID(id)
        navigate('/viewProfile',{state:{userProfileID:id}})

    }
    console.log(applicant)

    useEffect(() => {
        fetchApplicants()
    }, [])





    return (



        <div className='applied-jobs-parent'>
            {applicant.length>0 ? applicant.map((a, index) => {
                const { applicants } = a
                return (
                    applicants.map((b) => (
                        <div className="applied-jobs-child" key={index}>

                            <img src={a.jobData.companyLogo} alt="" />
                            <div className="details-applied">


                                <div>
                                    <p>{b.applicantName}</p>
                                </div>
                                <div>

                                    <h5><i className="fa-solid fa-building"></i>{a.jobData.companyName}</h5>
                                </div>
                                <div>
                                    <button className='btn btn-primary ' onClick={()=>fetchUserResume(b.applicantID)}>View profile</button>
                                </div>
                            </div>
                        </div>
                    ))

                )
            }) : <div className='text-center mb-5 mt-3 notfound-div'>
            <img src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png" alt="" />
            <p>hs</p>
           </div>}
        </div>




    )
}

export default Applicants
