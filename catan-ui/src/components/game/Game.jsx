import PlayerCard from './PlayerCard';
import Timer from './Timer';
import Stats from './Stats';
import { useState, useRef } from 'react';
import './Game.css';

export default function Game({ players, victoryPoints }) {
  const [winner, setWinner] = useState();
  const startTime = useRef(Date.now());
  const [endTime, setEndTime] = useState();

  function gameOver(player) {
    setWinner(player);
    setEndTime(Date.now());
  }

  return (
    <>
      {console.log(`victorypoints: ${victoryPoints}`)}
      <div>
        {players.map((p) => {
          return (
            <PlayerCard
              key={p.id}
              player={p}
              victoryPoints={victoryPoints}
              gameOver={gameOver}
            ></PlayerCard>
          );
        })}
        <p style={{ color: '#eee', fontSize: '0.9em' }}>
          (Jugando a{' '}
          <span id="victory-points" className="important-info">
            {victoryPoints}
          </span>{' '}
          puntos de victoria)
        </p>
        {winner !== undefined ? (
          <Stats
            start={startTime}
            end={endTime}
            players={players}
            winner={winner}
          />
        ) : (
          ''
        )}
        <Timer isRunning={winner === undefined}></Timer>
      </div>
    </>
  );
}
