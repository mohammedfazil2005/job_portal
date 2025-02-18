import React from 'react'
import './AllJobsCategory.css'

const AllJobsCategory = () => {

    const tempCategoryData=["Default","Full time","Part time","Internship"]

  return (
    <div className='category-parent'>
        <div className="category-heading">
            <h6>Job Type</h6>
            <p>Clear all</p>
        </div>
        <div className="category-list">
            {tempCategoryData.map((a)=>(
                <p>{a}</p>
            ))}
        </div>
     
    </div>
  )
}

export default AllJobsCategory
