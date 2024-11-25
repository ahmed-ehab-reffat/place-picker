import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [timeRemaining, setTimeRemaining] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 20);
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={timeRemaining} max={timer} />;
}
