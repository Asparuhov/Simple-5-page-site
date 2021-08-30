import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../Assets/Menu/x.svg";
import { ReactComponent as MenuIcon } from "../../Assets/Menu/menu.svg";
import Logo from "../../Assets/Menu/logo.png";
import "./Menu.css";
import {Link} from 'react-router-dom';
const Menu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="Menu">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to='/' >HOME</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Menu;
