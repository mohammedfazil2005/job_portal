import React from 'react'
import './AllJobsHeading.css'
const AllJobsHeading = () => {
  return (
    <div className='all-job-heading-parent'>
      <div className="all-job-heading-row">
        <h1>Find Your Dream Job Here<i className="fa-regular fa-star"></i></h1>
        <div>
            <input type="text" placeholder='Job title or Keyword' />
            <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default AllJobsHeading
