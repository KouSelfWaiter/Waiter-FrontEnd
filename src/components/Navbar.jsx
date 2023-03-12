import React from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'

const Navbar = () => {
  return (
          <nav className='menu-bar'>
        <ul>
          <li><a href=""><HiMenuAlt3/></a></li>
          <li><a href=""><BsSearch/></a></li>
        </ul>
      </nav>

      
  )
}

export default Navbar
