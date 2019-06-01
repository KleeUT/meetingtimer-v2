import { reducer } from "./globalStateReducer";
import { TimerState } from "./GlobalState";
import { actionTypes as controlActions } from "./controls";
describe("Global State Reducer", () => {
  it("Should set timer to running when start is published", () => {
    const state = givenAnInitialState();
    Object.freeze(state);
    const actualState = reducer(state, { type: controlActions.START_TIMER });
    expect(actualState.isRunning).toEqual(true);
  });

  it("Should set timer to not running when stop is published", () => {
    const state = { ...givenAnInitialState(), isRunning: true };
    Object.freeze(state);
    const actualState = reducer(state, { type: controlActions.STOP_TIMER });
    expect(actualState.isRunning).toEqual(false);
  });
});

const givenAnInitialState = (): TimerState => ({
  isRunning: false,
  count: 0
});
