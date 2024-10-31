import React from 'react';

const Navbar = ({ navItems }) => (
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
  </nav>
);

export default Navbar;
