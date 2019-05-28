import React, { useEffect, useState } from "react";
import { GlobalStateProvider, TimerState, BaseAction } from "./GlobalState";
const initialState = {
  isRunning: false
};
const reducer = (state: TimerState, action: BaseAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

function App() {
  return (
    <GlobalStateProvider reducer={reducer} initialState={initialState}>
      <TimeKeeper />
    </GlobalStateProvider>
  );
}

const TimeKeeper = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);
  useEffect(() => {
    window.setTimeout(() => {
      if (run) {
        console.log(`runnign with ${count}`);
        setCount(count + 1);
      }
    }, 1000);
  });

  const startTimer = () => {
    setRun(true);
  };

  const stopTimer = () => {
    setRun(false);
  };

  const resetTimer = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Meeting $$$ Counter</h1>
      <p>{count}</p>
      <button onClick={() => stopTimer()}>Stop</button>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  );
};

export default App;
