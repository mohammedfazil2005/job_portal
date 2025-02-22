import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = ({setShow,showProfile,setUserLogin,userLogin}) => {
     const handleShow = () => setShow(true);
     const [id,setId]=useState(false)

     const isIdExists=()=>{
        let idLocalStorage=localStorage.getItem("id")
        if(idLocalStorage){
            setId(true)
        }else{
            setId(false)
        }
     }

   

     const onLogout=()=>{
        localStorage.removeItem("id")
        toast.success("Logged out!")
        setUserLogin("Logout!")
        isIdExists()
       
     }

     useEffect(()=>{
        isIdExists()
     },[showProfile])


    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                   <Link className='navbar-brand' to={'/'}> <img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <Link to={'/jobs'}><li>Find Job</li></Link> 
                         <Link to={'/uploadjobs'}><li>Upload Job</li></Link> 
                          
                        </ul>
                         <div className="login-btn-fiv">
                            {id?<button onClick={onLogout}>Logout</button>:<button  onClick={handleShow}>Login</button>}
                         <Link to={'/profile'}><i className="fa-regular fa-user"></i></Link> 
                       
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
