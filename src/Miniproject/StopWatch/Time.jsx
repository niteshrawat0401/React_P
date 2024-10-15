import React, { useEffect, useState } from "react";

const Time = () => {
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds == 59) {
          setMinute(minute + 1);
          setSeconds(0);
        } else if (minute == 59) {
          setHours(hours + 1);
          setMinute(0);
        } else {
          setSeconds(seconds + 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning, seconds, minute]);

  // Handle start/stop
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  // Reset timer and clear laps
  const handleReset = () => {
    setMinute(0);
    setSeconds(0);
    setHours(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <p>
        {hours < 10 ? `0${hours}` : hours}:{minute < 10 ? `0${minute}` : minute}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <button onClick={handleStartStop}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Time;
