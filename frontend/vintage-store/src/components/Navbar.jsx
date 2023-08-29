import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from "../UserContext";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const showLoginOption = () => {
    if (loggedIn) {
        return (
          <>
            <li className="nav-item d-flex align-item-center">
        <NavLink className="nav-link   "  to="/login" onClick={logout}>
          <button className='btn btn-outline-danger'>LogOut</button> 
         </NavLink>
        </li>
          
        <div>

          <img width={40} className="ms-4 rounded-circle" src={"http://localhost:5000/"+currentUser.avatar} alt="" />
        </div>
       
          </>
        )
    } else {
      return (
        <>
          <li className="nav-item d-flex align-item-center">
        <NavLink className="nav-link text-white "  to="/login">
           Login
         </NavLink>
        </li>
        <li className="nav-item  d-flex align-item-center">
          <NavLink className="nav-link" to="/signup">
            <button className='btn btn-outline-light'>SignUp</button>
          </NavLink>
        </li>
        </>
      )
    }
  }

  return (
    <div className='' >
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>
      Vintage Store
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarButtonsExample">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
      <li className="nav-item ">
          <NavLink className="nav-link fs-3 "  to="/home">
            Home
         </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link fs-2 "  to="/about">
            About
         </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link fs-2 fw-strong "  to="/contact">
            Contact Us
         </NavLink>
        </li>
        </ul>
        
      
      

      
      
      </div>
        <div className='ms-auto d-flex align-item-center'>
        <ul className='d-flex justify-content-end nav align-items-center'>
        <li><NavLink className="nav-link" to="/sell">
            <button className='btn btn-outline-light'>SELL</button>
          </NavLink></li>
   <li><NavLink className="nav-link" to="/buy">
            <button className='btn btn-outline-light'>BUY</button>
          </NavLink></li>
        
        </ul>
        {showLoginOption()}
       
        </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
