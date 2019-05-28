import React, { useEffect } from "react";

import { useGlobalState } from "../GlobalState";
import { actionCreator } from "./timerActionCreator";
export const TimeKeeper = () => {
  const { state, dispatch } = useGlobalState();
  const timerActions = actionCreator({ dispatch });
  // const [count, setCount] = useState(0);
  // const [run, setRun] = useState(false);
  useEffect(() => {
    window.setTimeout(() => {
      if (state.isRunning) {
        // console.log(`runnign with ${count}`);
        // setCount(count + 1);
        timerActions.publishTick();
      }
    }, 1000);
  });

  const startTimer = () => {
    // setRun(true);
  };

  const stopTimer = () => {
    // setRun(false);
  };

  const resetTimer = () => {
    // setCount(0);
  };

  return (
    <div>
      <h1>Meeting $$$ Counter</h1>
      <p>{}</p>
      <button onClick={() => stopTimer()}>Stop</button>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  );
};
