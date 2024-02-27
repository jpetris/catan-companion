import { useState, useEffect } from 'react';
import './PlayerCard.css';

export default function PlayerCard({ player, victoryPoints, gameOver }) {
  const [score, setScore] = useState(2);

  const bgColors = ['#0066cc', '#F0F0F0', '#FF9900', '#DD2222'];

  useEffect(() => {
    score == victoryPoints && gameOver(player);
  });

  return (
    <div
      className="player-card-container"
      style={{
        background: 'linear-gradient(to bottom, #FFD699, #FFC266)',
        color: '#222',
      }}
    >
      <span
        id="player-name"
        className="fira-sans-regular"
        style={{
          display: 'block',
          padding: '6% 3% 6% 3%',
          fontSize: '1.3em',
          background: bgColors[player.color],
          borderBottom: '2px solid gray',
        }}
      >
        {score == victoryPoints ? (
          <p style={{ fontSize: '2.5em', padding: '0', margin: '0' }}>👑</p>
        ) : (
          ''
        )}
        {player.name}
      </span>

      <div>
        <span id="player-score" className="source-code">
          {score}
          <span style={{ fontSize: '0.4em' }}>PV</span>
        </span>
        <div>
          <button
            className="score-btn"
            onClick={() => {
              if (score > 2) setScore((prev) => prev - 1);
            }}
          >
            -
          </button>
          <button
            className="score-btn"
            onClick={() =>
              score < victoryPoints && setScore((prev) => prev + 1)
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
