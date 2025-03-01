import React, { useState } from 'react'
import AllJobsHeading from './alljobsHeading/AllJobsHeading'
import AllJobsContent from './alljobscontent/AllJobsContent'

const AllJobs = ({Uid}) => {
  const [search,setSearch]=useState("")
  const [category,setCategory]=useState("")
  const [reset,setReset]=useState("")
  return (
    <div style={{    backgroundColor: "whitesmoke"}}>
      <AllJobsHeading setSearch={setSearch} setCategory={setCategory}  />
      <AllJobsContent search={search} setSearch={setSearch} Uid={Uid} setCategory={setCategory} category={category} setReset={setReset} reset={reset} />
    </div>
  )
}

export default AllJobs
