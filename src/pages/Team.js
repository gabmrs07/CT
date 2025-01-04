import React from "react";

const Team = () => {
  return (
    <div>
      <h1>Nossa Equipe</h1>
      <p>
        Conheça os conselheiros tutelares que trabalham para proteger nossas
        crianças.
      </p>
      <div className="team-container">
        <div className="team-member">
          <h3>Maria</h3>
          <p>Conselheira Tutelar</p>
          <p>(99) 9 9999-9999</p>
        </div>
        <div className="team-member">
          <h3>João</h3>
          <p>Conselheiro Tutelar</p>
          <p>(99) 9 9999-9999</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
