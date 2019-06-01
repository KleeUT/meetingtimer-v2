import { useGlobalState } from "../GlobalState";
import { useActionCreator } from "./controlsActionCreator";
import { START_TIMER, STOP_TIMER, RESET_TIMER } from "./actionTypes";
jest.mock("../GlobalState");
describe("Timer Controls Actions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should dispatch start when start called", () => {
    const fakeDispatch = jest.fn();
    (useGlobalState as jest.Mock).mockImplementation(() => ({
      dispatch: fakeDispatch
    }));
    const { startTimer } = useActionCreator();
    startTimer();
    expect(fakeDispatch).toHaveBeenCalledWith({ type: START_TIMER });
  });
  it("should dispatch stop when stop called", () => {
    const fakeDispatch = jest.fn();
    (useGlobalState as jest.Mock).mockImplementation(() => ({
      dispatch: fakeDispatch
    }));
    const { stopTimer } = useActionCreator();
    stopTimer();
    expect(fakeDispatch).toHaveBeenCalledWith({ type: STOP_TIMER });
  });
  it("should dispatch reset when reset called", () => {
    const fakeDispatch = jest.fn();
    (useGlobalState as jest.Mock).mockImplementation(() => ({
      dispatch: fakeDispatch
    }));
    const { resetTimer } = useActionCreator();
    resetTimer();
    expect(fakeDispatch).toHaveBeenCalledWith({ type: RESET_TIMER });
  });
});
