import React, { useState } from 'react'
import AllJobsHeading from './alljobsHeading/AllJobsHeading'
import AllJobsContent from './alljobscontent/AllJobsContent'

const AllJobs = () => {
  const [search,setSearch]=useState("")
  return (
    <div style={{    backgroundColor: "whitesmoke"}}>
      <AllJobsHeading setSearch={setSearch}/>
      <AllJobsContent search={search}/>
    </div>
  )
}

export default AllJobs
