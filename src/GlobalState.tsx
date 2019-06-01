import React, { useReducer, createContext, useContext } from "react";

const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({
  reducer,
  children
}: {
  reducer: React.Reducer<TimerState, BaseAction>;
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
  count: number;
}

export interface BaseAction {
  type: string;
}

const initialState: TimerState = {
  isRunning: false,
  count: 0
};
