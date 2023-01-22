import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';
import './Navbar.css';
import image from '../../add.png';

const Navbar = () => {
  const {
    setProfileImage,
    setFullName,
    setEmail,
    setPhone,
    setDob,
    setCountry,
  } = useContext(UserContext);
  return (
    <div>
        <nav className="navbar-style">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={()=>{
          setProfileImage(image);
          setFullName("");
          setEmail("");
          setPhone("");
          setDob();
          setCountry("");
        }}>
          <Link to='/add-people' >Add People</Link>
        </li>
      </nav>
    </div>
  )
}

export default Navbar