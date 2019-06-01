import { useGlobalState } from "../GlobalState";
import { START_TIMER, STOP_TIMER, RESET_TIMER } from "./actionTypes";
export const useActionCreator = () => {
  const { dispatch } = useGlobalState();
  return {
    startTimer: () => {
      dispatch({ type: START_TIMER });
    },
    stopTimer: () => {
      dispatch({ type: STOP_TIMER });
    },
    resetTimer: () => {
      dispatch({ type: RESET_TIMER });
    }
  };
};
