import React, { useState } from 'react'
import './AllJobsHeading.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const AllJobsHeading = ({setSearch,setCategory,setReset}) => {

  const [value,setValue]=useState("")

  const onSearch=()=>{
    if(value){
      setSearch(value)
    setCategory("")
    
    }
    setValue("")
  }

  const handleKeyDown=(e)=>{
    if(e.key=="Enter"){
      onSearch()
    }
  }


  return (
    <div className='all-job-heading-parent sticky'>
      <div className="all-job-heading-row">
        <div className='all-jobs-heading-details'>
        <h1>Find Your Dream Job Here<i className="fa-regular fa-star"></i></h1>
        <img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" />
        </div>
        
        <div className='all-jobs-heading-search'>
        <FloatingLabel
        controlId="floatingInput"
        label="Job title or Keyword"
        className="mb-2 w-100"
        
      >
        <Form.Control type="text" onKeyDown={handleKeyDown}  value={value} placeholder="Job title or Keyword" style={{borderRadius:'70px'}} onChange={(e)=>setValue(e.target.value)} />
      </FloatingLabel>
      <button onClick={onSearch} ><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  )
}

export default AllJobsHeading
