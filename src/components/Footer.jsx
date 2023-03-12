import React from 'react'
import {CiForkAndKnife} from 'react-icons/ci'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'

const Footer = () => {
  return (
          <footer className='footer-bar'>
      <ul>
          <li><a href=""><CiForkAndKnife/></a></li>
          <li><a href=""><FiShoppingCart/></a></li>
          <li><a href=""><AiOutlineUser/></a></li>
        </ul>
    </footer>


  )
}

export default Footer
