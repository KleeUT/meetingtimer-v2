import { reducer } from "./globalStateReducer";
import { TimerState } from "./GlobalState";
import { actionTypes as controlActions } from "./controls";
import { dataEntryActions } from "./dataEntry";
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

  it("Should set participants on receiving participants action", () => {
    const state = givenAnInitialState();
    Object.freeze(state);
    const actualState = reducer(state, {
      type: dataEntryActions.PARTICIPANTS_UPDATED,
      participants: 56
    } as dataEntryActions.ParticipantsUpdatedAction);
    expect(actualState.participants).toEqual(56);
  });

  it("Should set salary  on receiving update salary action", () => {
    const state = givenAnInitialState();
    Object.freeze(state);
    const actualState = reducer(state, {
      type: dataEntryActions.AVERAGE_SALARY_UPDATED,
      averageSalary: 156
    } as dataEntryActions.AverageSalaryUpdatedAction);
    expect(actualState.averageSalary).toEqual(156);
  });
});

const givenAnInitialState = (): TimerState => ({
  isRunning: false,
  count: 0,
  averageSalary: 0,
  participants: 0
});
