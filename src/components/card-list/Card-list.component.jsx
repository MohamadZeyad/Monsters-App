import React from "react";
import "./card-list.component.css";
import { Card } from "../card/card.component";

export const CardList = a => {
  console.log(a.monsters);
  return (
    <div className="card-list">
      {a.monsters.map(monster => (
        <Card key={monster.id} haha={monster} no={monster}></Card>
      ))}
    </div>
  );
};
