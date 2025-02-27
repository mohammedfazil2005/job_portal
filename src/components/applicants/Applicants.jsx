import React, { useEffect, useState } from 'react'
import './Applicants.css'
import { userProfile } from '../../services/functionAPI'
const Applicants = ({ userID }) => {

    const [applicant, setApplicants] = useState([])

    const fetchApplicants = async () => {
        if (userID) {
            try {
                const serverResponce = await userProfile(userID)
                setApplicants(serverResponce.data.userJobs)
                console.log(serverResponce.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchApplicants()
    }, [])





    return (



        <div className='applied-jobs-parent'>
            {applicant ? applicant.map((a, index) => {
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

                                    <h5>{a.jobData.companyName}</h5>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>View profile</button>
                                </div>
                            </div>
                        </div>
                    ))

                )
            }) : <div className='d-flex justify-content-center'>
                <img src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" className='w-25' alt="" />
            </div>}
        </div>




    )
}

export default Applicants
