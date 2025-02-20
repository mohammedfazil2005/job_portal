import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { data } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userLogin, userRegistration } from '../../services/functionAPI'


const Login = ({show,setShow,setShowProfile}) => {

  const [error,setError]=useState("")
    const [userData,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })

  const [loginOrRegister,setLoginOrRegister]=useState("login")
  const modalChanging=()=>{
    if(loginOrRegister=="login"){
      setLoginOrRegister("register")
    }else{
      setLoginOrRegister("login")
    }
  }

  const onLogin=async()=>{
   if(loginOrRegister=="register"){
    if(userData.username&&userData.email&&userData.password){
       try {

        const serverResponceGet=await userLogin()
        const isEmailExists=serverResponceGet.data.find((a)=>a['email']==userData.email)
        if(isEmailExists){
            setError("Account already Exists!")
        }else{
            let payload={userData,userProfile:{},userJobs:[],userAppliedJobs:[]}
            const serverResponcePost=await userRegistration(payload)
            if(serverResponcePost.status>=200&&serverResponcePost.status<=300){
                localStorage.setItem("id",serverResponcePost.data.id)
                toast.success("Login success")
                setShowProfile(serverResponcePost)
                setShow(false)
                setError("")
            }else{
                toast.error("Login failed")
            }

        }
       } catch (error) {
        console.log(error)
       }
    }else{
        setError("All fields are required!")
    }
   }else{

    if(userData.email&&userData.password){
        try {
            const serverResponce=await userLogin()
            let findEmail=serverResponce.data.find((a)=>a['email']==userData.email)
            if(findEmail){
                if(findEmail.password==userData.password){
                    console.log("Success")
                    localStorage.setItem("id",findEmail.id)
                    toast.success("Login success!")
                    setShowProfile(findEmail)
                    setShow(false)
                    setError("")
                 }else{
                     console.log("Invalid credintials")
                     setError("Invalid credintials!")
                 }
            }else{
                setError("No account found!")
            }
        } catch (error) {
            console.log(error)
        }
    }else{
        setError("All fields are required!")
    }




   }
  }
 

  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{loginOrRegister=="login"?"Login!":"Register now!"}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <p className='text-danger'>{error}</p>
          {loginOrRegister=="register"&&(
            <>
             <FloatingLabel
             controlId="floatingInput"
             label="username"
             className="mb-3"
          
           >
             <Form.Control type="text" placeholder="username" onChange={((e)=>setUserData({...userData,username:e.target.value}))} />
           </FloatingLabel>
         
           </>
          )}
          
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com"onChange={((e)=>setUserData({...userData,email:e.target.value}))} />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={((e)=>setUserData({...userData,password:e.target.value}))} />
      </FloatingLabel>
     
      <div className="login-div">
    
      <Button onClick={onLogin} variant="light">{loginOrRegister=="login"?"Login":"Register"}</Button>
        <p onClick={modalChanging}>{loginOrRegister=="login"?"Already have an account?":"Doesn't have an account?"}</p>
      </div>
      
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Login
