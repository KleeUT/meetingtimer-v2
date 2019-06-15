import React from "react";
import { useGlobalState } from "../GlobalState";
import { calculateTotalSalary } from "../util/wageCalculator";
export const MeetingStatsDisplay = () => {
  const { state } = useGlobalState();
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Year</td>
          <td>
            $
            {calculateTotalSalary(state.participants, state.averageSalary)
              .perYear()
              .toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Month</td>
          <td>
            $
            {calculateTotalSalary(state.participants, state.averageSalary)
              .perMonth()
              .toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Week</td>
          <td>
            $
            {calculateTotalSalary(state.participants, state.averageSalary)
              .perWeek()
              .toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Hour</td>
          <td>
            $
            {calculateTotalSalary(state.participants, state.averageSalary)
              .perHour()
              .toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Minute</td>
          <td>
            $
            {calculateTotalSalary(state.participants, state.averageSalary)
              .perMinute()
              .toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Second</td>
          <td>
            $
            {calculateTotalSalary(state.participants, state.averageSalary)
              .perSecond()
              .toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
