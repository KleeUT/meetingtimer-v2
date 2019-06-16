import React from "react";
import { GlobalStateProvider, TimerState, BaseAction } from "./GlobalState";
import { reducer } from "./globalStateReducer";
import { useTimeKeeper, useTimerActions } from "./timeKeeper";
import { Headings, BoundingContainer } from "./components";
import { TimerControls } from "./controls";
import { ParticipantEntry, SalaryEntry } from "./dataEntry";
import { MeetingStatsDisplay } from "./MeetingStats";
import { MeetingCostDisplay } from "./MeetingCost";
function App() {
  return (
    <BoundingContainer>
      <GlobalStateProvider reducer={reducer}>
        <TimeKeeper />
        <Headings.Heading1>How much is your meeting costing?</Headings.Heading1>
        <ParticipantEntry />
        <SalaryEntry />
        <TimerControls />
        <MeetingCostDisplay />
        <MeetingStatsDisplay />
      </GlobalStateProvider>
    </BoundingContainer>
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

export default App;
