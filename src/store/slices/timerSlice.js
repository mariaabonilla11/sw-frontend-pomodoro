import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: 1500, // 25 minutes in seconds
    isRunning: false,
    endTime: null,
  },
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
      state.endTime = Date.now() + state.time * 1000;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
      state.endTime = null;
    },
    resetTimer: (state) => {
      state.time = 1500;
      state.isRunning = false;
      state.endTime = null;
    },
    tick: (state) => {
      if (state.time > 0) {
        state.time = Math.max(0, state.time - 1);
        if (state.time === 0) {
          state.isRunning = false;
        }
      }
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    loadState: (state, action) => {
      const payload = action.payload || {};
      if (typeof payload.time === "number") state.time = payload.time;
      if (typeof payload.isRunning === "boolean")
        state.isRunning = payload.isRunning;
      if (payload.endTime) state.endTime = payload.endTime;
      else state.endTime = null;
    },
  },
});

export const { startTimer, pauseTimer, resetTimer, tick, setTime, loadState } =
  timerSlice.actions;

export default timerSlice.reducer;
