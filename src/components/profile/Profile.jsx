import { TextField } from '@mui/material'
import React, { useEffect } from 'react'
import './Profile.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { userProfile, userProfileUpdate } from '../../services/functionAPI';
import { toast } from 'react-toastify';


const Profile = ({data}) => {
  const [show, setShow] = useState(false);
  const [profile,setProfile]=useState([])

  const userId=localStorage.getItem("id")

  const [userData,setUserData]=useState({
    name:"",
    headline:"",
    email:"",
    phone:"",
    location:"",
    education:[],
    experience:[],
    skills:[]
  })

 console.log(profile)

  const fetchProfile=async()=>{
    try {
      if(userId){
        const serverResponce=await userProfile(userId)
        setProfile(serverResponce.data)
      }else{
        toast.error("Login to continue")
      }
    } catch (error) {
      console.log(error)
    }
   
  }

  const updateProfile=async()=>{
    try {
      const serverResponce=await userProfileUpdate(userId,userData)
      if(serverResponce.status>=200&&serverResponce.status<=300){
        toast.success("Profile updated!")
        fetchProfile()
        setShow(false)
      }else{
        console.log("error")
      }

    } catch (error) {
      console.log(error)
    }
  }



  useEffect(()=>{
    fetchProfile()
  },[])




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='profile-section-parent'>
      <div className="profile-section-child">
        <div>
          <div className="profile-icon-div">
            <img src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg" alt="" />
            <button className='btn btn-primary' onClick={handleShow}>Change</button>
          </div>
          <div className="profile-detail-div">
            <div className='update-name-div'>
              <h6><i className="fa-solid fa-graduation-cap"></i>{profile.name?profile.name:"Full Name"}</h6>
              <button><i className="fas fa-edit" onClick={handleShow}></i></button>
            </div>
           <div className="profile-other-details">
           <h6><i className="fa-solid fa-map-pin"></i>{profile.headline?profile.headline:"Professional Headline!"}</h6>
            <h6><i className="fa-solid fa-envelope"></i>{profile.email?profile.email:"Your Email Address!"}</h6>
            <h6><i className="fa-solid fa-phone"></i>{profile.phone?profile.phone:"Your Phone Number!"}</h6>
            <h6><i class="fa-solid fa-location-dot"></i>{profile.location?profile.location:"Your Location!"}</h6>
           </div>
             <div className='desg-details'>
              <h3><i className="fa-solid fa-book"></i> Education</h3>
              <ul>
              {profile.education?profile.education.split("\n").map((a)=>(
                <li>{a}</li>
              )):""}
              </ul>
             </div>
             <div className='desg-details'>
              <h3><i className="fa-solid fa-suitcase"></i>Experience</h3>
              <ul>
              {profile.experience?profile.experience.split("\n").map((a)=>(
                 <li>{a}</li>
              )):""}
              </ul>
             </div>
             <div className='desg-details'>
              <h3><i class="fa-solid fa-marker"></i>Skills</h3>
             <ul>
             {profile.skills?profile.skills.split("\n").map((a)=>(
                 <li>{a}</li>
              )):""}
             </ul>
             </div>
          

          </div>

        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Full Name" className='' onChange={(e)=>setUserData({...userData,name:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Professional Headline"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Professional Headline" className='' onChange={(e)=>setUserData({...userData,headline:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email Address"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Email Address" className='' onChange={(e)=>setUserData({...userData,email:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Phone Number" className='' onChange={(e)=>setUserData({...userData,phone:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Location"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Location" className='' onChange={(e)=>setUserData({...userData,location:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Education">
        <Form.Control className='mb-3'
          as="textarea"
          placeholder="Education"
          style={{ height: '100px' }} onChange={(e)=>setUserData({...userData,education:e.target.value})}
        />
      </FloatingLabel>


      <FloatingLabel controlId="floatingTextarea2" label="Experience">
        <Form.Control
          as="textarea"
          placeholder="Experience"
          className='mb-3'
          style={{ height: '100px' }}
          onChange={(e)=>setUserData({...userData,experience:e.target.value})}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Skills">
        <Form.Control
          as="textarea"
          placeholder="Skills"
          className='mb-3'
          style={{ height: '100px' }}
          onChange={(e)=>setUserData({...userData,skills:e.target.value})}
        />
      </FloatingLabel>
     

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProfile} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Profile