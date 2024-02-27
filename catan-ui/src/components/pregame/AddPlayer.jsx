import './AddPlayer.css';
import { useState } from 'react';

export default function AddPlayer({ placeholder, addPlayer }) {
  const [name, setName] = useState(
    placeholder?.name || `Jugador ${placeholder.id + 1}`
  );
  const [color, setColor] = useState(placeholder?.color || 0);
  let ready = placeholder?.ready || false;

  const availableColors = [
    { name: 'blue', color: '🟦', hex: '#00a6ed' },
    { name: 'white', color: '⬜', hex: '#f0f0f0' },
    { name: 'orange', color: '🟧', hex: '#fc9338' },
    { name: 'red', color: '🟥', hex: '#f8312f' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    addPlayer({ ...placeholder, name: name, color: color, ready: true });
  }

  function cancel() {
    addPlayer({ ...placeholder, ready: false });
  }

  return (
    <div
      className="player-container"
      style={{
        outline: `4px solid ${availableColors[color].hex}`,
        outlineOffset: '-10px',
      }}
    >
      {ready ? (
        <div className="player-ready-container">
          <p>¡Listo!</p>
          <p>{name}</p>
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
          <button
            onClick={handleSubmit}
            style={{
              marginTop: '30px',
              height: '40px',
              border: '2px solid lightgray',
              borderRadius: '10px',
            }}
          >
            Agregar
          </button>
        </div>
      )}
    </div>
  );
}
