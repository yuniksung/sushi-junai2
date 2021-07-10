import React from 'react'
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="nav-btn">
                <button>Take Out</button>
                <button>Reservations</button>
            </div>
        </div>
    )
}

export default Navbar
