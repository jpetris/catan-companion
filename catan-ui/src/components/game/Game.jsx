import PlayerCard from "./PlayerCard";
import { useState } from "react";
import "./Game.css";

export default function Game({ players, victoryPoints }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  return (
    <>
      {players.map((p) => {
        return (
          <PlayerCard player={p} victoryPoints={victoryPoints}></PlayerCard>
        );
      })}
      <p id="victory-points-msg">
        ¡Jugando a{" "}
        <span id="victory-points" className="important-info">
          {victoryPoints}
        </span>{" "}
        puntos de victoria!
      </p>
      <p id="game-time-msg">
        Tiempo de partida:{" "}
        <span id="game-time" className="important-info">
          00:00:00
        </span>
      </p>
    </>
  );
}

/*
❌ - Tiempo de partida
✔️ - Puntos de Victoria
*/
