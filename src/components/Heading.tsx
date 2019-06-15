import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
`;
export const Heading1 = ({ children }: { children: string }) => (
  <H1>{children}</H1>
);
