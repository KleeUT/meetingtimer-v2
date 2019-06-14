import { useActionCreator } from "./salaryEntryActionCreator";
import {
  UPDATE_AVERAGE_SALARY,
  UPDATE_PARTICIPANTS,
  UpdateParticipantsAction,
  UpdateAverageSalaryAction
} from "./actions";
import { TimerState, BaseAction, useGlobalState } from "../GlobalState";
jest.mock("../GlobalState", () => ({
  useGlobalState: jest.fn()
}));

describe("Salary action creator", () => {
  it("should send change salary action", () => {
    const dispatch = jest.fn();
    givenDispatchAndState(undefined, dispatch);
    const actionCreator = useActionCreator();
    actionCreator.updateSalary(12345);
    const expectedAction: UpdateAverageSalaryAction = {
      type: UPDATE_AVERAGE_SALARY,
      averageSalary: 12345
    };
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should send change participants action", () => {
    const dispatch = jest.fn();
    givenDispatchAndState(undefined, dispatch);
    const actionCreator = useActionCreator();
    actionCreator.updateParticipants(5);
    const expectedAction: UpdateParticipantsAction = {
      type: UPDATE_PARTICIPANTS,
      participants: 5
    };
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });
});

const givenDispatchAndState = (
  state: TimerState | undefined,
  dispatch: React.Dispatch<BaseAction> | undefined
) => {
  (useGlobalState as jest.Mock).mockImplementation(() => ({ state, dispatch }));
};
