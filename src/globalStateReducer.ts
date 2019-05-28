import { GlobalStateProvider, TimerState, BaseAction } from "./GlobalState";
export const initialState = {
  isRunning: false
};
export const reducer = (state: TimerState, action: BaseAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
