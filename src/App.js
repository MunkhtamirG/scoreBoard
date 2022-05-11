import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";
import { useState, useEffect } from "react";

export default function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => setPlayers(res.players));
  }, []);

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />
      {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
}
