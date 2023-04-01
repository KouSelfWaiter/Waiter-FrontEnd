import React from 'react'
import { useSidebarContext } from '../../context/sidebarContext';
import { ImCancelCircle} from "react-icons/im";
import "./Sidebar.scss";
import { Link} from "react-router-dom"

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar} = useSidebarContext();

  return (
    <nav className={`{sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}}`}>
      <button typpe = "button" className='navbar-hide-btn' onClick={() =>
      closeSidebar()}>
          <ImCancelCircle size = {24} />
      </button>

      <div className='side-content'>
          <ul className='side-nav'>
            <li className='side-item'>
              <Link to = "" className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                Side Link here
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Sidebar