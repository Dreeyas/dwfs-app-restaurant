import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div className="flexCenter paddings">
          <img src="./whitelogo.png" alt="logotype" width={100} />
          <h2 className="nav-title">Mitsuito's Ramen Bar</h2>
        </div>
        <div className="flexCenter paddings h-menu">
          <Link to="/dwfs-app-restaurant/about">About Us</Link>
          <Link to="/dwfs-app-restaurant/menu">Our Menu</Link>
          <Link to="/dwfs-app-restaurant/blog">Blog</Link>
          <button className='button'>
            <Link to="/dwfs-app-restaurant/booking">Book a Table</Link>
          </button>

        </div>
      </div>

    </section>
  )
}

export default NavBar