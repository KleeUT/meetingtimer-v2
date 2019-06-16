import React from "react";
import styled from "styled-components";
const Foot = styled.div``;
const FootLink = styled.a`
  font-size: 0.5rem;
`;
export const Footer = () => (
  <Foot>
    <FootLink href="https://kleeut.com">Klee Thomas</FootLink>{" "}
    <FootLink href="https://github.com/KleeUT/meetingtimer-v2">
      See the code
    </FootLink>
  </Foot>
);
