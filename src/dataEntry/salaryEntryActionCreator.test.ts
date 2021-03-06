import { useActionCreator } from "./salaryEntryActionCreator";
import { AVERAGE_SALARY_UPDATED, AverageSalaryUpdatedAction } from "./actions";
import { TimerState, BaseAction, useGlobalState } from "../GlobalState";
jest.mock("../GlobalState", () => ({
  useGlobalState: jest.fn()
}));

describe("Salary action creator", () => {
  it("should send change salary action", () => {
    const dispatch = jest.fn();
    givenDispatchAndState(undefined, dispatch);
    const actionCreator = useActionCreator();
    actionCreator.updateSalary("12345");
    const expectedAction: AverageSalaryUpdatedAction = {
      type: AVERAGE_SALARY_UPDATED,
      averageSalary: 12345
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
