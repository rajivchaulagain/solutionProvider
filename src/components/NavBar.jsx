import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
{/*Navbar*/}


<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ServiceChaiyo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
           <div className="homme">
           <Link className="nav-link " id='home' aria-current="page" to="/Home1">Home</Link>
           </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/List">Service-List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>








    </div>
  )
}
