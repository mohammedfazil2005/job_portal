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


const Profile = ({showProfile,logout}) => {
  const [show, setShow] = useState(false);
  const [profile,setProfile]=useState([]);
  const[update,setUpdate]=useState([])
  const [showImage,setShowImage]=useState(false)


  const userId=localStorage.getItem("id")

  const [userData,setUserData]=useState({
    imageURL:"",
    name:"",
    headline:"",
    email:"",
    phone:"",
    location:"",
    education:[],
    experience:[],
    skills:[]
  })

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setUserData({
      imageURL:profile.imageURL||"",
      name: profile.name || "",
      headline: profile.headline || "",
      email: profile.email || "",
      phone: profile.phone || "",
      location: profile.location || "",
      education: profile.education || "",
      experience: profile.experience || "",
      skills: profile.skills || "",
    });
    setShow(true)
  };

  const handleShowImage=()=>{
    setShowImage(true)
    setUserData({
      imageURL:profile.imageURL||"",
      name: profile.name || "",
      headline: profile.headline || "",
      email: profile.email || "",
      phone: profile.phone || "",
      location: profile.location || "",
      education: profile.education || "",
      experience: profile.experience || "",
      skills: profile.skills || "",
    });
    
  }
  const handleCloseImage=()=>{
    setShowImage(false)
  }


  const fetchProfile=async()=>{
    try {
      if(userId){
        const serverResponce=await userProfile(userId)
        setProfile(serverResponce.data.userProfile)
        setUpdate(serverResponce.data)
      
      }
    } catch (error) {
      console.log(error)
    }
   
  }


  const updateProfile=async()=>{
    if(userId){
      try {
        update.userProfile=userData
       let serverResponce=await userProfileUpdate(userId,update)
       if(serverResponce.status>=200&&serverResponce.status<=300){
        toast.success("Profile updated")
        fetchProfile()
        setShow(false)
        
       }else{
        toast.error("Error occured")
       }
        
        } catch (error) {
        console.log(error)
       }
    }
  }

  const updateProfilePicture=async()=>{
    try {
      update.userProfile.imageURL=userData.imageURL
      let serverResponce=await userProfileUpdate(userId,update)
       if(serverResponce.status>=200&&serverResponce.status<=300){
        toast.success("Profile Picture updated")
        fetchProfile()
        setShowImage(false)
        
       }else{
        toast.error("Error occured")
       }
        
    } catch (error) {
      
    }
  }

console.log(logout)

  useEffect(()=>{
    fetchProfile()
  },[showProfile,logout])




  
  return (
    <>
    <div>
          {profile? <div className='display-job-parent'>
                    <div className="display-job-left-2">
          
                      <img src={profile.imageURL?profile.imageURL:""} alt="Add your image!" />
                      <button className='btn btn-primary mt-2' onClick={handleShowImage}>Change</button>
                      
                    </div>
                    <div className="display-job-right">
                      <div className='edit-div'>
                      <h5>User Information:</h5>
                      <button className='btn btn-primary' onClick={handleShow}>Edit profile</button>
                      </div>
                      <div className="display-job-details-2">
                        <p><span>Name:  </span>{profile.name?profile.name:"Full Name"}</p>
                        <p><span>Title:</span> {profile.headline?profile.headline:"Title"}</p>
                        <p><span>Location</span>{profile.location?profile.location:"Location"}</p>
                        <p><span>Mail:</span>{profile.email?profile.email:"Email"}</p>
                        <p><span>Phone:</span>+91 {profile.phone?profile.phone:"Phone"}</p>
                      </div>
                      <h5 className='mt-3'>Qualifications</h5>
                      <div className="display-job-description-2">
                          {profile?profile.education?profile.education.split('\n').map((a,index)=>(
                            <p key={index}>{a}</p>
                          )):"":""}
                        </div>
                        <h5 className='mt-3'>Skills</h5>
                        <div className="display-job-description-2">
                        {profile?profile.skills?profile.skills.split('\n').map((a,index)=>(
                          <p key={index}>{a}</p>
                        )):"Add your skills!":""}
                        </div>
                        <h5 className='mt-3'>Experience</h5>
                        <div className="display-job-description-2">
                        {profile?profile.experience?profile.experience.split('\n').map((a,index)=>(
                          <p key={index}>{a}</p>
                        )):"Add your experience!":""}
                      </div>
                      
                    </div>
                  </div>:"Data not found"}
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
        <Form.Control
        value={userData.name} type="text" placeholder="Full Name"  onChange={(e)=>setUserData({...userData,name:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Professional Headline"
        className="mb-3"
      >
        <Form.Control
        value={userData.headline} type="text" placeholder="Professional Headline"  onChange={(e)=>setUserData({...userData,headline:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email Address"
        className="mb-3"
      >
        <Form.Control
        value={userData.email} type="text" placeholder="Email Address"  onChange={(e)=>setUserData({...userData,email:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control
        value={userData.phone} type="text" placeholder="Phone Number"  onChange={(e)=>setUserData({...userData,phone:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Location"
        className="mb-3"
      >
        <Form.Control
        value={userData.location} type="text" placeholder="Location"  onChange={(e)=>setUserData({...userData,location:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Education">
        <Form.Control
        value={userData.education} className='mb-3'
          as="textarea"
          placeholder="Education"
          style={{ height: '100px' }} onChange={(e)=>setUserData({...userData,education:e.target.value})}
        />
      </FloatingLabel>


      <FloatingLabel controlId="floatingTextarea2" label="Experience">
        <Form.Control
        value={userData.experience}
          as="textarea"
          placeholder="Experience"
          className='mb-3'
          style={{ height: '100px' }}
          onChange={(e)=>setUserData({...userData,experience:e.target.value})}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Skills">
        <Form.Control
        value={userData.skills}
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

      <Modal show={showImage} onHide={handleCloseImage} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control
        value={userData.imageURL} type="text" placeholder="Image URL"  onChange={(e)=>setUserData({...userData,imageURL:e.target.value})} />
      </FloatingLabel>
    

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImage}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProfilePicture} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Profile