import { TimerState, BaseAction } from "./GlobalState";
import { actionTypes as controlActions } from "./controls";
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
    default:
      return state;
  }
};
