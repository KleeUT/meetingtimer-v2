import React from "react";
import { Number } from "../components";
import { useActionCreator } from "./salaryEntryActionCreator";
import { useGlobalState } from "../GlobalState";
export const SalaryEntry = () => {
  const actionCreator = useActionCreator();
  const { state } = useGlobalState();
  return (
    <Number
      data-testid="salary-entry-input"
      label="About how much do they get paid on average?"
      value={state.averageSalary}
      onChange={e => actionCreator.updateSalary(e.target.value)}
    />
  );
};
