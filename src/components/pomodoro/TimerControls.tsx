"use client";

import Button from "../ui/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { startTimer, pauseTimer, resetTimer } from "../../store/slices/timerSlice";

export default function TimerControls() {
  const dispatch = useAppDispatch();
  const isRunning = useAppSelector((state) => state.timer.isRunning);

  return (
    <div className="flex flex-row justify-center items-center">
      {isRunning ? (
        <Button onClick={() => dispatch(pauseTimer())}>pause</Button>
      ) : (
        <Button onClick={() => dispatch(startTimer())}>start</Button>
      )}
      <Button onClick={() => dispatch(resetTimer())}>reset</Button>
    </div>
  );
}
