import React from 'react'
import './AllJobsContent.css'

import AllJobsMain from '../alljobsMain/AllJobsMain'
import AllJobsCategory from '../alljobscategory/AllJobsCategory'

const AllJobsContent = ({search,setSearch}) => {
  return (
    <div>
      <div className='heading-job-content'>
        {/* <h1>Recommended jobs</h1>
        <button className='btn btn-light'>Most recent</button> */}
      </div>
      <div className='main-job-content'>
      <AllJobsCategory/>
      <AllJobsMain search={search} setSearch={setSearch}/>
      
      </div>
      
    </div>
  )
}

export default AllJobsContent
