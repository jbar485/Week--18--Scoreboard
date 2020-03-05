import React from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";

const players = [
  {
    name: "Jenkens",
    score: 50
  },
  {
    name: "Leroy",
    score: 85
  },
  {
    name: "Snowman",
    score: 95
  },
  {
    name: "Chich",
    score: 80
  }
];

function App() {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />
      {players.map(player => (
        <Player name={player.name} />
      ))}
    </div>
  );
}

export default App;
