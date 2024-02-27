import './AddPlayer.css';
import { useState } from 'react';

export default function AddPlayer({ placeholder, addPlayer }) {
  const [name, setName] = useState(
    placeholder?.name || `Jugador ${placeholder.id + 1}`
  );
  const [color, setColor] = useState(placeholder?.color || 0);
  let ready = placeholder?.ready || false;

  const availableColors = [
    { name: 'blue', color: '🟦' },
    { name: 'white', color: '⬜' },
    { name: 'orange', color: '🟧' },
    { name: 'red', color: '🟥' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    addPlayer({ ...placeholder, name: name, color: color, ready: true });
  }

  function cancel() {
    addPlayer({ ...placeholder, ready: false });
  }

  return (
    <div className="player-container">
      {ready ? (
        <div className="player-ready-container">
          <p>¡Listo!</p>
          <p>
            {name}
            {availableColors[color].color}
          </p>
          <button onClick={cancel}>Volver</button>
        </div>
      ) : (
        <div className="add-player-container">
          <label>
            <input
              id="player-name-input"
              type="text"
              placeholder={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <br />
          <div className="color-picker">
            <span
              className="color-picker-label"
              style={{ fontSize: '5em', margin: '0', padding: '0' }}
              onClick={() => {
                setColor(color == 3 ? 0 : color + 1);
              }}
            >
              {availableColors[color].color}
            </span>
          </div>
          <button onClick={handleSubmit} style={{ marginTop: '30px' }}>
            Agregar
          </button>
        </div>
      )}
    </div>
  );
}
