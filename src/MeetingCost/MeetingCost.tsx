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
      <TimeDisplay>Meeting time: {formatAsTime(state.count)}</TimeDisplay>
    </div>
  );
};
const formatAsTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const secondWithoutHourss = totalSeconds % 3600;
  const minutes = Math.floor(secondWithoutHourss / 60);
  const seconds = totalSeconds % 60;
  return `${hours}:${minutes}:${seconds}`;
};
