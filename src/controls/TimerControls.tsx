import React from "react";
import { buttons } from "../components";
import { useActionCreator } from "./controlsActionCreator";
export default () => {
  const { startTimer, stopTimer, resetTimer } = useActionCreator();
  const { PrimaryButton, WarningButton, SecondaryButton } = buttons;
  return (
    <div>
      <SecondaryButton onClick={stopTimer}>Stop</SecondaryButton>
      <PrimaryButton onClick={startTimer}>Start</PrimaryButton>
      <WarningButton onClick={resetTimer}>Reset</WarningButton>
    </div>
  );
};
