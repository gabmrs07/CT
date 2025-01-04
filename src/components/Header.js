import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Conselho Tutelar</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/services">Serviços</Link>
          </li>
          <li>
            <Link to="/team">Equipe</Link>
          </li>
          <li>
            <Link to="/news">Notícias</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
