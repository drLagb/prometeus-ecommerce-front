import { useState, useRef, useEffect } from "react";

export function usechronometer(time_s: number) {
  const [getCurrentTime, setCurrentTime] = useState(time_s);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (getCurrentTime <= 0) {
        clearInterval(intervalo);
        return;
      }
      setCurrentTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [getCurrentTime]);
  function getHours() {
    return (getCurrentTime / 3600) % 24;
  }
  function getMinutes() {
    return (getCurrentTime / 60) % 60;
  }
  function getSeconds() {
    return getCurrentTime % 60;
  }
  function setTime(time_s: number) {
    setCurrentTime(time_s);
  }
  return {
    getHours,
    getMinutes,
    getSeconds,
    setTime,
  };
}
