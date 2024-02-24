import { useState } from 'react';
import './App.css';
import VictoryPointCard from './components/VictoryPointsCard';

function App() {
  return (
    <>
      <h1 className="medievalsharp-regular">Catan Companion</h1>
      <VictoryPointCard
        props={{ player: { name: 'Rosana', color: 'red' } }}
      ></VictoryPointCard>
      <VictoryPointCard
        props={{ player: { name: 'Jorge', color: 'white' } }}
      ></VictoryPointCard>
    </>
  );
}

export default App;
