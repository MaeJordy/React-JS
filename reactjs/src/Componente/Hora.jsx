import React, { useState, useEffect } from 'react';
import '../App.css';

function Hora() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString('es-ES', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });

  const formattedDate = time.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='Hora'>
      <p>Hora actual: {formattedTime}</p>
      <p>Fecha actual: {formattedDate}</p>
    </div>
  );
}

export default Hora;