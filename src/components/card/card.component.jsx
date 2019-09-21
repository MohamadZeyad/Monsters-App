import React from "react";

import "./card.styles.css";

export const Card = s => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${s.haha.id}&size=180x180`} />

    <h2>{s.haha.name}</h2>
    <p>{s.no.email}</p>
  </div>
);
