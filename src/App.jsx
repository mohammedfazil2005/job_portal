import React, { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import AllJobs from "./components/alljobs/AllJobs";
import UploadJobs from "./components/uploadjob/UploadJobs";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import { ToastContainer, toast } from 'react-toastify';
import DisplayJob from "./components/displayjob/DisplayJob";
import AppliedJobs from "./components/appliedjobs/AppliedJobs";
import Applicants from "./components/applicants/Applicants";
import ViewProfile from "./components/viewUserProfile/ViewProfile";

function App() {
  const [show, setShow] = useState(false);
  const [showProfile,setShowProfile]=useState("")
  const [logout,setLogout]=useState("")
  const [category,setCategory]=useState("")
  const [userProfileID,setUserProfileID]=useState("")
  const userID=localStorage.getItem("id")
 

  return (
    <>
    <ToastContainer />
    <Login show={show} setShow={setShow} setShowProfile={setShowProfile}  />
    <Navbar setShow={setShow} logout={logout} setLogout={setLogout} showProfile={showProfile}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/jobs" element={<AllJobs Uid={userID}/>}/>
      <Route path="/uploadjobs" element={<UploadJobs userID={userID}/>}/>
      <Route path="/profile" element={<Profile  showProfile={showProfile} logout={logout}/>} />
      <Route path="/displayjob" element={<DisplayJob userID={userID}/>}/>
      <Route path="/applicants" element={<Applicants userID={userID} setUserProfileID={setUserProfileID}/>}/>
      <Route path="/appliedjobs" element={<AppliedJobs userID={userID}/>}/>
      <Route path="/viewProfile" element={<ViewProfile userID={userID} />}/>
    </Routes>
    <hr />
    <Footer/>
    </>
  )
}

export default App
