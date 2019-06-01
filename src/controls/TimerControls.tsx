import React from "react";
import { Button } from "../components";
import { useActionCreator } from "./controlsActionCreator";
export default () => {
  const { startTimer, stopTimer, resetTimer } = useActionCreator();
  return (
    <div>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </div>
  );
};
