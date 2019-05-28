import React from "react";
import { TICK } from "../actionTypes";
import { BaseAction } from "../GlobalState";
export const actionCreator = ({
  dispatch
}: {
  dispatch: React.Dispatch<BaseAction>;
}) => ({
  publishTick: () => {
    dispatch({ type: TICK });
  }
});
