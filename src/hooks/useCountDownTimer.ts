import { useState, useCallback, useRef, useEffect } from "react";

function useCountDownTimer(seconds: number) {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);
  const intervalRef = useRef<null | NodeJS.Timeout>(null);

  const startCountdown = useCallback(() => {
    console.log("starting countdown");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetCountDown = useCallback(() => {
    console.log("resetting countdown...");
    clearInterval(Number(intervalRef.current));
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log("clearing timer...");

      clearInterval(Number(intervalRef.current));
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startCountdown, resetCountDown };
}

export default useCountDownTimer;
