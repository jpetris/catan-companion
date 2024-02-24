import './VictoryPointsCard.css';
import { useState, useEffect, useRef } from 'react';

export default function VictoryPointCard({ props }) {
  const { player } = props;
  const [score, setScore] = useState(2);

  return (
    <div className="main-container">
      <p id="player-name" className="fira-sans-regular">
        {player.name}
      </p>
      <p id="player-score" className="source-code">
        {score}
      </p>
      <div>
        <button
          onClick={() => {
            if (score > 2) setScore(score - 1);
          }}
        >
          &lt;
        </button>
        <button onClick={() => setScore(score + 1)}>&gt;</button>
      </div>
    </div>
  );
}
