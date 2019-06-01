import React, { useEffect, useState } from "react";
import { GlobalStateProvider, TimerState, BaseAction } from "./GlobalState";
import { reducer } from "./globalStateReducer";
import { useTimeKeeper } from "./timeKeeper";

import { TimerControls } from "./controls";
import { useGlobalState } from "./GlobalState";
function App() {
  useTimeKeeper({
    onTick: () => {},
    interval: 1000
  });
  return (
    <GlobalStateProvider reducer={reducer}>
      <Display />
      <TimerControls />
    </GlobalStateProvider>
  );
}

const Display = () => {
  const { state } = useGlobalState();
  return (
    <h1>Running? : {state.isRunning ? "Teapots R US" : "short and stout"}</h1>
  );
};

export default App;
