import React, { use, useState } from 'react'
import './AllJobsCategory.css'

const AllJobsCategory = () => {

    const tempCategoryData=["Default","Full time","Part time","Internship"]

    const [cat,setCat]=useState("")
    
    const changedCat=(a)=>{
        setCat(a)
    }
    console.log(cat)

  return (
    <div className='category-parent'>
        <div className="category-heading">
            <h6>Job Type</h6>
        
        </div>
        <div className="category-list">
            {tempCategoryData.map((a,index)=>(
                <p key={index} onClick={()=>changedCat(a)} style={cat==a?{borderBottom:'2px solid gray'}:{}}>{a}</p>
            ))}
        </div>
     
    </div>
  )
}

export default AllJobsCategory
