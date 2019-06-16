import React from "react";
import { useGlobalState } from "../GlobalState";
import { calculateTotalSalary } from "../util/wageCalculator";
import styled from "styled-components";
const CostDislay = styled.p`
  font-size: 2rem;
`;
const TimeDisplay = styled.p`
  font-size: 0.5rem;
`;
export const MeetingCostDisplay = () => {
  const { state } = useGlobalState();
  return (
    <div>
      <CostDislay>
        $
        {(
          state.count *
          calculateTotalSalary(
            state.participants,
            state.averageSalary
          ).perSecond()
        ).toFixed(2)}
      </CostDislay>
      <TimeDisplay>{state.count} Seconds</TimeDisplay>
    </div>
  );
};
