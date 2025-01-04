import React from "react";

const News = () => {
  return (
    <div>
      <h1>Notícias e Eventos</h1>
      <p>
        Fique por dentro das últimas notícias e eventos organizados pelo
        Conselho Tutelar.
      </p>
      <div className="news-container">
        <div className="news-item">
          <h3>Campanha de Conscientização</h3>
          <p>
            Evento realizado para promover os direitos das crianças e
            adolescentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
