import './Stats.css';

export default function Stats({ start, end, players, winner }) {
  return (
    <>
      <p
        style={{
          color: 'white',
          fontSize: '1.5em',
          backgroundColor: 'rgba(2,2,2,0.6)',
          padding: '2%',
        }}
      >
        ¡{winner.name} ha ganado la partida!
      </p>
      {/* <p style={{ color: 'white' }}>Turnos jugados:</p> */}
      {/* <p>
        Hora de inicio:
        {() => {
          const time = new Date(start.current);
          return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        }}
      </p> */}
    </>
  );
}
