import { useGlobalState } from "../GlobalState";
import { SET_COUNT, SetCountAction } from "./actionTypes";
export const useTimerActions = () => {
  const { state, dispatch } = useGlobalState();
  return {
    tick: () => {
      if (state.isRunning) {
        const action: SetCountAction = {
          type: SET_COUNT,
          count: state.count + 1
        };
        dispatch(action);
      }
    }
  };
};
