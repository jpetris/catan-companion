import formatedTime from '../../utils/TimeFormatter.js';
import './Stats.css';

export default function Stats({ start, end, winner }) {
  console.log(end - start.current);
  return (
    <>
      <p style={{ color: 'white', fontSize: '1.5em' }}>
        Ganador: {winner.name}
      </p>
      <p style={{ color: 'white' }}>Turnos jugados:</p>
      <p style={{ color: 'white' }}>
        Tiempo de partida: {formatedTime((end - start.current) / 1000)}
      </p>
    </>
  );
}
