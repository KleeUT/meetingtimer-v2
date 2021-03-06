import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ParticipantEntry } from "./ParticipantsEntry";
import { useGlobalState } from "../GlobalState";
import { useActionCreator } from "./participantEntryActionCreator";
jest.mock("../GlobalState");
jest.mock("./participantEntryActionCreator");

describe("Participant Entry", () => {
  afterEach(() => {
    cleanup();
  });
  it("Should render the input field", () => {
    (useGlobalState as jest.Mock).mockReturnValue({
      state: {}
    });
    const { getByTestId } = render(<ParticipantEntry />);
    const node = getByTestId("participant-entry-input");
    expect(node).toBeDefined();
  });

  it("Should render the state value on render", () => {
    (useGlobalState as jest.Mock).mockReturnValue({
      state: {
        participants: 153
      }
    });
    const { getByTestId } = render(<ParticipantEntry />);
    const node = getByTestId("participant-entry-input") as HTMLInputElement;
    expect(node.value).toEqual("153");
  });

  it("Should call the action creator on input change", () => {
    (useGlobalState as jest.Mock).mockReturnValue({
      state: {}
    });
    (useActionCreator as jest.Mock).mockReturnValue({
      updateParticipants: jest.fn()
    });
    const { getByTestId } = render(<ParticipantEntry />);
    const node = getByTestId("participant-entry-input") as HTMLInputElement;
    fireEvent.input(node, { target: { value: "15" } });
    expect(useActionCreator().updateParticipants).toHaveBeenCalledWith("15");
  });
});
