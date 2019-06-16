import React from "react";
import { buttons } from "../components";
import { useActionCreator } from "./controlsActionCreator";
import { useGlobalState } from "../GlobalState";
const { PrimaryButton, WarningButton, SecondaryButton } = buttons;

export default () => {
  const { state } = useGlobalState();
  const { startTimer, stopTimer, resetTimer } = useActionCreator();
  return (
    <div>
      <StartButton isRunning={state.isRunning} action={startTimer} />
      <StopButton isRunning={state.isRunning} action={stopTimer} />
      <ResetButton isRunning={state.isRunning} action={resetTimer} />
    </div>
  );
};

const StopButton = ({
  isRunning,
  action
}: {
  action: () => void;
  isRunning: boolean;
}) =>
  isRunning ? <SecondaryButton onClick={action}>Pause</SecondaryButton> : null;

const ResetButton = ({
  isRunning,
  action
}: {
  action: () => void;
  isRunning: boolean;
}) =>
  isRunning ? null : <WarningButton onClick={action}>Reset Time</WarningButton>;

const StartButton = ({
  isRunning,
  action
}: {
  action: () => void;
  isRunning: boolean;
}) =>
  isRunning ? null : <PrimaryButton onClick={action}>Start</PrimaryButton>;
