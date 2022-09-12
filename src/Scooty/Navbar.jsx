import React from 'react'
import  "./Navbar.css"
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <div className='main_div'>
        <div className='inner_div'>
          <Link to={""}>Scooty Rental</Link>
          <Link to={""}>Login</Link>
          <Link to={""}>Register</Link>
          <Link to={""}>Logout </Link>
        </div>
      </div>
    </div>
  )
}
