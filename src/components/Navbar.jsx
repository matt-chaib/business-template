import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">MyCompany</div>
        
        {/* Burger Menu for Mobile */}
        <button 
          className={`burger-menu ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end className="nav-item">Home</NavLink>
          <NavLink to="/trending" className="nav-item">Trending Concerts</NavLink>
          <NavLink to="/concerts" className="nav-item">All Concerts</NavLink>
          <NavLink to="/account" className="nav-item">Account</NavLink>
        </div>
      </div>
    </nav>
  );
}
