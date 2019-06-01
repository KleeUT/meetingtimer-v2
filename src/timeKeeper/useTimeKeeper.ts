import { useEffect } from "react";
export const useTimeKeeper = ({
  onTick,
  interval
}: {
  onTick: Function;
  interval: number;
}) => {
  useEffect(() => {
    window.setTimeout(() => {
      onTick();
    }, interval);
  });
};
