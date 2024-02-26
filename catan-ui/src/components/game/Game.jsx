import PlayerCard from './PlayerCard';
import Timer from './Timer';
import Stats from './Stats';
import { useState, useRef, useEffect } from 'react';
import './Game.css';

export default function Game({ players, victoryPoints }) {
  const [winner, setWinner] = useState();
  const startTime = useRef(Date.now());
  const [endTime, setEndTime] = useState();

  function gameOver(player) {
    setWinner(player);
    // Stop timer
    setEndTime(Date.now());
  }

  return (
    <>
      {winner === undefined ? (
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
          <p id="victory-points-msg">
            ¡Jugando a{' '}
            <span id="victory-points" className="important-info">
              {victoryPoints}
            </span>{' '}
            puntos de victoria!
          </p>
          <Timer isRunning={winner === undefined}></Timer>
        </div>
      ) : (
        <Stats start={startTime} end={endTime} winner={winner} />
      )}
    </>
  );
}

/*
❌ - Tiempo de partida
✔️ - Puntos de Victoria
*/
