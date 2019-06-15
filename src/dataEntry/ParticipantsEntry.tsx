import React from "react";
import { Number } from "../components";
import { useGlobalState } from "../GlobalState";
import { useActionCreator } from "./participantEntryActionCreator";
export const ParticipantEntry = () => {
  const { state } = useGlobalState();
  const actionCreator = useActionCreator();
  return (
    <Number
      label="How many people are in your meeting?"
      value={state.participants}
      onChange={e => actionCreator.updateParticipants(e.target.value)}
    />
  );
};
