import TimerControls from "./TimerControls";

export default function TimerDisplay({ time }: { time: number }) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <h1 className="font-kdam text-black text-9xl font-bold mb-8 tracking-wider">
        {formatTime(time)}
      </h1>
      <TimerControls />
    </>
  );
}
