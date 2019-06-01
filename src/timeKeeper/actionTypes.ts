import { BaseAction } from "../GlobalState";
export const SET_COUNT = "SET_COUNT";
export interface SetCountAction extends BaseAction {
  count: number;
}
