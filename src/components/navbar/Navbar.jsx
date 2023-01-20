import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar-style">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add-people' >Add People</Link>
        </li>
      </nav>
    </div>
  )
}

export default Navbar