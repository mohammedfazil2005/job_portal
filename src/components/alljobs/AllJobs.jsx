import React from 'react'
import AllJobsHeading from './alljobsHeading/AllJobsHeading'
import AllJobsContent from './alljobscontent/AllJobsContent'

const AllJobs = () => {
  return (
    <div style={{    backgroundColor: "whitesmoke"}}>
      <AllJobsHeading/>
      <AllJobsContent/>
    </div>
  )
}

export default AllJobs
