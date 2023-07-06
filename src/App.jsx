import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [countdown, setCountdown] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const inputValue = parseInt(event.target.value);
      const countdownValue = isNaN(inputValue) ? 0 : Math.floor(inputValue);

      clearInterval(timerId);

      setCountdown(countdownValue);
      startTimer(countdownValue);
    }
  };

  const startTimer = (countdownValue) => {
    const id = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    setTimerId(id);
  };

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId);
    }
  }, [countdown, timerId]);

  return (
    <div className='main'>
      <h1>Countdown Timer</h1>
      <input id="timeCount" type="number" onKeyDown={handleKeyDown} />
      <div id="current-time">{countdown}</div>
    </div>
  );
}

export default App;