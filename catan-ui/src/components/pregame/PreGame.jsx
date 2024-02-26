import AddPlayer from "./AddPlayer";
import { useEffect, useState, useRef } from "react";
import "./PreGame.css";

export default function PreGame({ preparePlayers, startGame }) {
  const [players, setPlayers] = useState([
    { id: 0, color: 0 },
    { id: 1, color: 1 },
    { id: 2, color: 2 },
    { id: 3, color: 3 },
  ]);

  const [victoryPoints, setVictoryPoints] = useState(10);

  const addPlayer = (newPlayer) => {
    setPlayers((currentPlayers) => {
      const copy = [...currentPlayers];
      copy[newPlayer.id] = newPlayer;
      return copy;
    });
  };

  const instantiatePlayer = () => {
    setPlayers((currentPlayers) => {
      return [...currentPlayers, { id: currentPlayers.length }];
    });
  };

  function playersReady(e) {
    e.preventDefault();
    startGame(
      players.filter((p) => p.ready),
      victoryPoints
    );
  }

  return (
    <>
      <div className="players-container">
        {players.map((player) => (
          <AddPlayer
            playerPlaceholder={player}
            addPlayer={addPlayer}
          ></AddPlayer>
        ))}
      </div>
      <div>
        <label>
          Puntos de victoria para ganar: &nbsp;
          <input
            type="number"
            defaultValue={victoryPoints}
            onChange={(e) => setVictoryPoints(e.target.value)}
          />
        </label>
      </div>
      <button
        id="start-game-btn"
        disabled={players.filter((p) => p.ready).length < 2}
        onClick={playersReady}
      >
        Iniciar la partida
      </button>
    </>
  );
}
