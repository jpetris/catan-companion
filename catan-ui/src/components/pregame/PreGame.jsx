import AddPlayer from './AddPlayer';
import { useState } from 'react';
import './PreGame.css';

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
            key={player.id}
            placeholder={player}
            addPlayer={addPlayer}
          ></AddPlayer>
        ))}
      </div>
      <div style={{ marginTop: '3%' }}>
        <label htmlFor="vp-input" style={{ display: 'block', color: 'white' }}>
          Puntos de victoria para ganar:
        </label>
        <p style={{ fontSize: '2em', fontWeight: 'bold', color: 'white' }}>
          {victoryPoints}
        </p>
        <input
          id="vp-input"
          type="range"
          defaultValue={victoryPoints}
          onChange={(e) => setVictoryPoints(e.target.value)}
          style={{ width: '50%' }}
        />
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
