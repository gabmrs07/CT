import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2025 Projeto de Extensão Uniasselvi. Todos os direitos
        reservados.
      </p>
      <ul className="social-links">
        <li>
          <a href="#facebook" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="#twitter" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="#instagram" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
