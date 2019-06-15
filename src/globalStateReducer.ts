import { TimerState, BaseAction } from "./GlobalState";
import { actionTypes as controlActions } from "./controls";
import { timeActionTypes } from "./timeKeeper";
import { dataEntryActions } from "./dataEntry";
export const reducer = (state: TimerState, action: BaseAction): TimerState => {
  switch (action.type) {
    case controlActions.START_TIMER:
      return {
        ...state,
        isRunning: true
      };
    case controlActions.STOP_TIMER:
      return {
        ...state,
        isRunning: false
      };
    case timeActionTypes.SET_COUNT:
      return {
        ...state,
        count: (action as timeActionTypes.SetCountAction).count
      };
    case dataEntryActions.AVERAGE_SALARY_UPDATED:
      return {
        ...state,
        averageSalary: (action as dataEntryActions.AverageSalaryUpdatedAction)
          .averageSalary
      };
    case dataEntryActions.PARTICIPANTS_UPDATED:
      return {
        ...state,
        participants: (action as dataEntryActions.ParticipantsUpdatedAction)
          .participants
      };
    default:
      return state;
  }
};
