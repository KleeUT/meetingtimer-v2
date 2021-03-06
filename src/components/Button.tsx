import styled from "styled-components";
const Button = styled.button`
  /* border: 2px solid black; */
  border-style: none;
  margin: 0.2rem;
  border-radius: 0.1rem;
  box-shadow: 0.1rem 0.1rem #aaa;
  width: 100%;
  padding: 0.3rem;
`;

export const PrimaryButton = styled(Button)`
  color: #010;
  background: linear-gradient(135deg, #fff, #dfd);
`;

export const SecondaryButton = styled(Button)`
  color: #222;
  background: linear-gradient(135deg, #fff, #ddd);
`;

export const WarningButton = styled(Button)`
  color: #100;
  background: linear-gradient(135deg, #fff, #fdd);
`;
