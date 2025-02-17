import React, { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import AllJobs from "./components/alljobs/AllJobs";

function App() {
  const [show, setShow] = useState(false);

  const [loginOrRegister,setLoginOrRegister]=useState("login")

  const modalChanging=()=>{
    if(loginOrRegister=="login"){
      setLoginOrRegister("register")
    }else{
      setLoginOrRegister("login")
    }
  }
  console.log(loginOrRegister)

  const handleClose = () => setShow(false);

  return (
    <>
    <Navbar setShow={setShow}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/jobs" element={<AllJobs/>}/>
    </Routes>








    

    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{loginOrRegister=="login"?"Login!":"Register now!"}</Modal.Title>
        </Modal.Header>
        <Modal.Body >

          {loginOrRegister=="register"&&(
             <FloatingLabel
             controlId="floatingInput"
             label="username"
             className="mb-3"
           >
             <Form.Control type="email" placeholder="username" />
           </FloatingLabel>
          )}
          
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
     
      <div className="login-div">
    
      <Button variant="light">{loginOrRegister=="login"?"Login":"Register"}</Button>
        <p onClick={modalChanging}>{loginOrRegister=="login"?"Already have an account?":"Doesn't have an account?"}</p>
      </div>
      
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default App
