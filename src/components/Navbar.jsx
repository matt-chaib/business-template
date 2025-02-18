import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export function Navbar() {
    const [clicked, setClicked] = useState(false)

  return (
    <div className="header-container">
    <nav className="header-menu">
        <div className="header-items">
            <div className="desktop-nav-container">
                <div className="desktop-nav-logo-and-links">
                    <NavLink className="NavLink" to="/"><div className="logo">Sheffield Landscaping</div></NavLink>
                </div>
                <div>
                <ul className="desktop-navlinks">
                    <li><NavLink className="NavLink" to="/services">Services</NavLink></li>
                    <li><NavLink className="NavLink" to="/about">About</NavLink></li>
                    <li><NavLink className="NavLink" to="/faq">FAQ</NavLink></li>
                    <li><div className="NavLink">example@email.com or 0123456789</div></li>
                    </ul>
                </div>
            </div>
            <div className="mobile-nav-container">
                <div className="mobile-nav-left">
                <NavLink className="NavLink" to="/"><div className="logo">Sheffield Landscaping</div></NavLink>
                </div>
                <div className="mobile-nav-right">
                <button onClick={() => setClicked(!clicked)} className="mobile-nav-menu-button Button_icon">
                <div className={`MenuIcon_menuIcon ${clicked ? "mobile-menu-open" : ""}`}>
                      <span className="MenuIcon_bar"></span>
                      <span className="MenuIcon_bar"></span>
                      <span className="MenuIcon_bar"></span>
                    </div>
                  </button>
                </div>
                <div className={`drawer`}>
                  <nav id="drawer-container" className={`${clicked ? "menu-drawer drawer-checked" : "menu-drawer drawer-container"}`}>
                    <ul>
                    <NavLink className="NavLink" to="/"><div className="logo">Sheffield Landscaping</div></NavLink>
                    <br></br>
                    <li><NavLink className="NavLink" to="/services">Services</NavLink></li>
                    <li><NavLink className="NavLink" to="/about">About</NavLink></li>
                    <li><NavLink className="NavLink" to="/faq">FAQ</NavLink></li>
                    <li><div className="NavLink">example@email.com or 0123456789</div></li>
                    </ul>
                  </nav>
                
                </div>
            </div>
        </div>
    </nav>
</div>
  );
}
