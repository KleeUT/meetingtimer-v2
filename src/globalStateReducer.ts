import { TimerState, BaseAction } from "./GlobalState";
import { actionTypes as controlActions } from "./controls";
import { timeActionTypes } from "./timeKeeper";
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
    default:
      return state;
  }
};
