import React, { useState } from 'react';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Header">
      <div className="logo"></div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={menuOpen ? 'nav open' : 'nav'}>
        <li>Home</li>
        <li>Service</li>
        <li>About Me</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Header;
