import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StopWatch() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("useremail");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);


  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{seconds}s</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
