import { useState } from "react";
import "./App.css";
import PreGame from "./components/pregame/PreGame";
import Game from "./components/game/Game";

function App() {
  const [ready, setReady] = useState(false);
  const [players, setPlayers] = useState([]);
  const [victoryPoints, setVictoryPoints] = useState(10);

  function startGame(readyPlayers, victoryPointsToWin) {
    setPlayers(readyPlayers);
    setVictoryPoints(victoryPointsToWin);
    setReady(true);
  }

  return (
    <>
      <h1 className="medievalsharp-regular">Catan Companion</h1>
      {ready ? (
        <Game players={players} victoryPoints={victoryPoints}></Game>
      ) : (
        <PreGame startGame={startGame}></PreGame>
      )}
    </>
  );
}

export default App;
