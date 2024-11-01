import React, { useState } from 'react';

const Navbar = ({ navItems }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
  <nav>
    <div className='nav-left'>
      <a href="#home">
        <h2>Bharath</h2>
      </a>
    </div>
    <div className='nav-right'>
    {navItems.map((item, index) => (
      <a href={`#${item.toLowerCase()}`} key={index}>
        {item}
      </a>
    ))}
    </div>
    <div>
  <button className="menu-top-up" onClick={openSidebar}>
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
  </button>

  <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <button className="close-menu" onClick={closeSidebar}>
      <p>Close Menu</p> <a><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></a>
    </button>
    {navItems.map((item, index) => (
      <a href={`#${item.toLowerCase()}`} key={index}>
        {item}
      </a>
    ))}
  </div>
</div>


  </nav>
)};

export default Navbar;
