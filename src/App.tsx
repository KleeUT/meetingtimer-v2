import React, { useEffect, useState } from "react";
import { GlobalStateProvider, TimerState, BaseAction } from "./GlobalState";
import { reducer } from "./globalStateReducer";
import { useTimeKeeper, useTimerActions } from "./timeKeeper";
import { Headings } from "./components";
import { TimerControls } from "./controls";
import { useGlobalState } from "./GlobalState";
import { ParticipantEntry, SalaryEntry } from "./dataEntry";
function App() {
  return (
    <GlobalStateProvider reducer={reducer}>
      <TimeKeeper />
      <Display />
      <ParticipantEntry />
      <SalaryEntry />
      <TimerControls />
    </GlobalStateProvider>
  );
}
const TimeKeeper = () => {
  const { tick } = useTimerActions();
  useTimeKeeper({
    onTick: tick,
    interval: 1000
  });
  return null;
};
const Display = () => {
  const { state } = useGlobalState();
  return (
    <section>
      <Headings.Heading1>How much is your meeting costing?</Headings.Heading1>
      <p>{state.count}</p>
    </section>
  );
};

export default App;
