import "./AddPlayer.css";
import { useState } from "react";

export default function AddPlayer({ playerPlaceholder, addPlayer }) {
  let name = playerPlaceholder?.name || `Jugador ${playerPlaceholder.id + 1}`;
  let ready = playerPlaceholder?.ready || false;

  const [color, setColor] = useState(playerPlaceholder?.color || 0);

  const availableColors = [
    { name: "blue", color: "🟦" },
    { name: "white", color: "⬜" },
    { name: "orange", color: "🟧" },
    { name: "red", color: "🟥" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    addPlayer({ ...playerPlaceholder, name: name, color: color, ready: true });
  }

  function cancel() {
    addPlayer({ ...playerPlaceholder, ready: false });
  }

  return (
    <div className="player-container">
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
                name = e.target.value;
              }}
            />
          </label>
          <br />
          <div className="color-picker">
            <button
              onClick={() => {
                setColor(color == 0 ? 3 : color - 1);
              }}
            >
              &larr;
            </button>
            <span className="color-picker-label">
              {availableColors[color].color}
            </span>
            <button
              onClick={() => {
                setColor(color == 3 ? 0 : color + 1);
              }}
            >
              &rarr;
            </button>
          </div>
          <button onClick={handleSubmit}>Agregar</button>
        </div>
      )}
    </div>
  );
}
