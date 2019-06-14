import { BaseAction } from "../GlobalState";
export const UPDATE_PARTICIPANTS = "UPDATE_PARTICIPANTS";
export const UPDATE_AVERAGE_SALARY = "UPDATE_AVERAGE_SALARY";

export interface UpdateParticipantsAction extends BaseAction {
  participants: number;
}
export interface UpdateAverageSalaryAction extends BaseAction {
  averageSalary: number;
}
