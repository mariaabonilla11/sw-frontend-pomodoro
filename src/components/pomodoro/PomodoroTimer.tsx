"use client";

import { useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setTime, pauseTimer } from "../../store/slices/timerSlice";

export default function PomodoroTimer() {
  const time = useAppSelector((state) => state.timer.time);
  const isRunning = useAppSelector((state) => state.timer.isRunning);
  const dispatch = useAppDispatch();

  const endTime = useAppSelector((state) => state.timer.endTime);

  useEffect(() => {
    if (!isRunning || !endTime) return;

    const id = setInterval(() => {
      const remainingMs = endTime - Date.now();
      const remainingSec = Math.max(0, Math.ceil(remainingMs / 1000));
      dispatch(setTime(remainingSec));
      if (remainingSec <= 0) {
        dispatch(pauseTimer());
      }
    }, 250);

    return () => clearInterval(id);
  }, [isRunning, endTime, dispatch]);

  return (
    <div>
      <TimerDisplay time={time} />
    </div>
  );
}
