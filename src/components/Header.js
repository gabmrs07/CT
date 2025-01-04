import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`logo ${isMenuOpen ? "hide" : ""}`}>
        <Link to="/">Conselho Tutelar</Link>
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={toggleMenu}>
              Equipe
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
