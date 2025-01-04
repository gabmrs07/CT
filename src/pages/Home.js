import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Conselho Tutelar</h1>
      <p>Promovendo a proteção e os direitos das crianças e adolescentes.</p>
      <div className="cards-container">
        <Card
          title="O que é o Conselho Tutelar?"
          description="Saiba mais sobre nossa missão e como atuamos na comunidade."
          link="/about"
        />
        <Card
          title="Nossos Serviços"
          description="Confira os serviços oferecidos para apoiar crianças e adolescentes."
          link="/services"
        />
        <Card
          title="Entre em Contato"
          description="Estamos aqui para ajudar. Fale conosco!"
          link="/contact"
        />
      </div>
    </div>
  );
};

export default Home;
