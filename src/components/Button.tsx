import React from "react";
export default ({
  onClick,
  children
}: {
  onClick: Function;
  children: any;
}) => <button onClick={e => onClick(e)}>{children}</button>;
