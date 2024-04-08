import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './logo.png';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

const Navigation = ({ isAuthenticated, handleLogout  }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  console.log("Rendering with menu state:", isMenuOpen ? "Open" : "Closed");

  return (
    <nav>
      <Link to="/"><img src={myImage} className="logo" alt="Logo" /></Link>
      <ul id="sidemenu" className={isMenuOpen ? 'open' : 'close'}>
        <li><Link to="/learn"><i className="fa fa-book-open"></i>&nbsp;Learn</Link></li>
        <li><Link to="/about"><i className="fa fa-certificate"></i>&nbsp;About Us</Link></li>
        <li><Link to="/contact"><i className="fa fa-envelope"></i>&nbsp;Contact Us</Link></li>
        {isAuthenticated ? (
          <>
          
            <li><Link to="/dashboard"><i className="fa fa-user"></i>&nbsp;Dashboard</Link></li>
            <li><Link to="/logout"  onClick={handleLogout}><i className="fa fa-sign-out-alt"></i>&nbsp;Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/signin"><i className="fa fa-user-plus"></i>&nbsp;Sign-in</Link></li>
            <li><Link to="/signup"><i className="fa fa-sign-in-alt"></i>&nbsp;Sign-up</Link></li>
          </>
        )}
        <i className="fas fa-times" onClick={closeMenu}></i>
      </ul>
      <i className="fas fa-bars" onClick={isMenuOpen ? closeMenu : openMenu}></i>
    </nav>
  );
}

export default Navigation;
