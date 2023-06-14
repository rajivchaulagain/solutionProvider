import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import pic from './logo.png'

export const NavBar = () => {
  return (
    <div className='contain'>

<nav className="navbar navbar-expand-lg">
     
          <a className="navbar-brand" href="#">
            <img src={pic} alt=""/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
           <div className="homme">
           <Link className="nav-link " id='home' aria-current="page" to="/Home1">Home</Link>
           </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/List">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Blog">Contact</Link>
              </li>
            </ul>
            <div className='signBtn'>
              <button className='sign-in'>
              <i className="fa-regular fa-user me-2">
                  </i>
                Sign In
                </button>
              <button className='sign-up'>
                <i className="fa-solid fa-lock me-2">
                  </i>
                   Sign Up
                   </button>
            </div>
          </div>
     
      </nav>








    </div>
  )
}
