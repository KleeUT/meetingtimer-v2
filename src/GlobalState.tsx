import React, { useReducer, createContext, useContext } from "react";

const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({
  reducer,
  initialState,
  children
}: {
  reducer: React.Reducer<TimerState, BaseAction>;
  initialState: TimerState;
  children: any;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () =>
  useContext(GlobalStateContext) as {
    state: TimerState;
    dispatch: React.Dispatch<BaseAction>;
  };

export interface TimerState {
  isRunning: boolean;
}

export interface BaseAction {
  type: string;
}
