import React, { useState } from 'react'
import './navbar.scss'

import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleToggle = () => {
    setClick(!click)
  }
  const handleClose = () => {
    setClick(!click)
  }
  return (
    <header className='header'>
      <Link to='#' className='logo'>
        {' '}
        <span>BE</span>FIT
      </Link>

      <div
        id='menu-btn'
        onClick={handleToggle}
        className={click ? 'fas fa-times' : 'fas fa-bars'}
      ></div>

      <nav className={click ? 'navbar active' : 'navbar'}>
        <Link to='#home' onClick={handleClose}>
          Home
        </Link>
        <Link to='#about' onClick={handleClose}>
          About
        </Link>
        <Link to='#feature' onClick={handleClose}>
          Feature
        </Link>
        <Link to='#pricing' onClick={handleClose}>
          Pricing
        </Link>
        <Link to='#trainers' onClick={handleClose}>
          Trainers
        </Link>
        <Link to='#blogs' onClick={handleClose}>
          Blogs
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
