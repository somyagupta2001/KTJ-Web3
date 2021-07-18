import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <Link to="/"><img src={logo} className="logo-img" alt="Logo" /></Link>
            <div className="links">
                <Link to="/">Dashboard</Link>
                <Link to="/Signin">Sign In</Link>
                <Link to="/Signup">Sign Up</Link>
            </div>
        </div>
     );
}
 
export default Navbar;