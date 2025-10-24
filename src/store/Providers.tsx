"use client";

import { Provider } from "react-redux";
import { store } from "./index";
import { loadState } from "./slices/timerSlice";
import { useEffect } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem("pomodoro_state");
      if (raw) {
        const parsed = JSON.parse(raw);
        store.dispatch(loadState(parsed));
      }
    } catch (e) {
      console.warn("Could not load pomodoro_state from localStorage", e);
    }

    const unsubscribe = store.subscribe(() => {
      try {
        const s = store.getState().timer;
        localStorage.setItem("pomodoro_state", JSON.stringify(s));
      } catch (e) {
        console.warn("Could not save pomodoro_state to localStorage", e);
      }
    });

    return () => unsubscribe();
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
