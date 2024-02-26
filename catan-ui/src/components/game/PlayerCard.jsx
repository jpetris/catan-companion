import { useState, useEffect, useRef } from 'react';
import './PlayerCard.css';

export default function PlayerCard({ player, victoryPoints, gameOver }) {
  const [winner, setWinner] = useState(false);
  const [score, setScore] = useState(2);

  useEffect(() => {
    score == victoryPoints && gameOver(player);
  }, [score]);

  return (
    <div className="player-card-container">
      <p id="player-name" className="fira-sans-regular">
        {player.name}
      </p>
      {winner ? (
        <p>¡Ganador!</p>
      ) : (
        <div>
          <p id="player-score" className="source-code">
            {score}
          </p>
          <div>
            <button
              className="score-btn"
              onClick={() => {
                if (score > 2) setScore(score - 1);
              }}
            >
              -
            </button>
            <button
              className="score-btn"
              onClick={() => score < victoryPoints && setScore(score + 1)}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
