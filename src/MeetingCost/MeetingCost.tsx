import React from "react";
import { useGlobalState } from "../GlobalState";
import { calculateTotalSalary } from "../util/wageCalculator";
export const MeetingCostDisplay = () => {
  const { state } = useGlobalState();
  return (
    <div>
      <p>
        $
        {state.count *
          calculateTotalSalary(
            state.participants,
            state.averageSalary
          ).perSecond()}
      </p>
      <p>{state.count} Seconds</p>
    </div>
  );
};
