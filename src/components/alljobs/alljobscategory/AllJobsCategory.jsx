import React, { use, useState } from 'react'
import './AllJobsCategory.css'

const AllJobsCategory = ({setCategory,setReset,setSearch}) => {

    const tempCategoryData=["Full time","Part time","Internship"]

    const [cat,setCat]=useState("")
    
    const changedCat=(a)=>{
        setCat(a)
        setCategory(a)
        setSearch("")
    }
    const onReset=()=>{
        setCategory("")
        setCat("")
        setReset("")
    }

  return (
    <div className='category-parent'>
        <div className="category-heading">
            <h6>Job Type</h6>
          
        </div>
        <p onClick={onReset} id='reset'>Reset ()</p>
        <div className="category-list">
            {tempCategoryData.map((a,index)=>(
                <p key={index}  onClick={() => changedCat(a)} 
                className={cat === a ? "selected-category" : ""}>{a}</p>
            ))}
        </div>
     
    </div>
  )
}

export default AllJobsCategory
