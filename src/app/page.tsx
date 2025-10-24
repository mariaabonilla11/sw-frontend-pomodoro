import Image from "next/image";
import PomodoroTimer from "../components/pomodoro/PomodoroTimer";
import Sidebar from "../components/ui/Sidebar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <div className="flex-1 flex items-center justify-center">
        <PomodoroTimer />
      </div>
      <Sidebar />
    </main>
  );
}
