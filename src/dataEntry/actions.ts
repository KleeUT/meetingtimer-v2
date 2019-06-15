import { BaseAction } from "../GlobalState";
export const PARTICIPANTS_UPDATED = "UPDATE_PARTICIPANTS";
export const AVERAGE_SALARY_UPDATED = "UPDATE_AVERAGE_SALARY";

export interface ParticipantsUpdatedAction extends BaseAction {
  participants: number;
}
export interface AverageSalaryUpdatedAction extends BaseAction {
  averageSalary: number;
}
