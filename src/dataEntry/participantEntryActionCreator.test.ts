import { useActionCreator } from "./participantEntryActionCreator";
import { PARTICIPANTS_UPDATED, ParticipantsUpdatedAction } from "./actions";
import { TimerState, BaseAction, useGlobalState } from "../GlobalState";
jest.mock("../GlobalState", () => ({
  useGlobalState: jest.fn()
}));

describe("Salary action creator", () => {
  it("should send change participants action", () => {
    const dispatch = jest.fn();
    givenDispatchAndState(undefined, dispatch);
    const actionCreator = useActionCreator();
    actionCreator.updateParticipants("5");
    const expectedAction: ParticipantsUpdatedAction = {
      type: PARTICIPANTS_UPDATED,
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
