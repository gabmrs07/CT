import React from "react";
import "../styles/Card.css";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} className="card-link">
            Saiba mais
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
