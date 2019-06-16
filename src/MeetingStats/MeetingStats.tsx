import React from "react";
import { useGlobalState } from "../GlobalState";
import { calculateTotalSalary } from "../util/wageCalculator";
import styled from "styled-components";
const Row = styled.tr`
  border: 1px solid white;
  border: none;
`;

const Cell = styled.td`
  border: none;
  padding: 0.1rem;
  border-bottom: 1px solid #414;
`;
const RightAlignedCell = styled(Cell)`
  text-align: right;
`;

const LeftAlignedCell = styled(Cell)`
  text-align: left;
`;

const RightAlignedHeading = styled.th`
  text-align: right;
`;

const LeftAlignedHeading = styled.th`
  text-align: left;
`;
const Table = styled.table`
  border-collapse: collapse;
`;

export const MeetingStatsDisplay = () => {
  const { state } = useGlobalState();
  return (
    <Table>
      <thead>
        <Row>
          <RightAlignedHeading>Time:</RightAlignedHeading>
          <LeftAlignedHeading>Cost</LeftAlignedHeading>
        </Row>
      </thead>
      <tbody>
        <StatsRow
          text="Second"
          value={calculateTotalSalary(state.participants, state.averageSalary)
            .perSecond()
            .toFixed(2)}
        />
        <StatsRow
          text="Minute"
          value={calculateTotalSalary(state.participants, state.averageSalary)
            .perMinute()
            .toFixed(2)}
        />
        <StatsRow
          text="Hour"
          value={calculateTotalSalary(state.participants, state.averageSalary)
            .perHour()
            .toFixed(2)}
        />
        <StatsRow
          text="Work Day"
          value={calculateTotalSalary(state.participants, state.averageSalary)
            .perDay()
            .toFixed(2)}
        />
        <StatsRow
          text="Work Week"
          value={calculateTotalSalary(state.participants, state.averageSalary)
            .perWeek()
            .toFixed(2)}
        />
        <StatsRow
          text="Month"
          value={calculateTotalSalary(state.participants, state.averageSalary)
            .perMonth()
            .toFixed(2)}
        />
        <StatsRow
          text="Year"
          value={calculateTotalSalary(state.participants, state.averageSalary)
            .perYear()
            .toFixed(2)}
        />
      </tbody>
    </Table>
  );
};

const StatsRow = ({ text, value }: { text: string; value: string }) => (
  <Row>
    <RightAlignedCell>{text}:</RightAlignedCell>
    <LeftAlignedCell>${value}</LeftAlignedCell>
  </Row>
);
