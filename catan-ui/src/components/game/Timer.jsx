import { useState, useEffect } from 'react';
import formatedTime from '../../utils/TimeFormatter.js';

export default function Timer({ isRunning }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevValue) => prevValue + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <p id="game-time-msg">
        Tiempo de partida:{' '}
        <span id="game-time" className="important-info">
          {formatedTime(elapsedTime)}
        </span>
      </p>
    </>
  );
}
