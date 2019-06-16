import styled from "styled-components";
const Button = styled.button`
  /* border: 2px solid black; */
  border-style: none;
  margin: 0.1rem;
  background: white;
  border-radius: 0.1rem;
  box-shadow: 0.1rem 0.1rem #aaa;
  width: 100%;
`;

export const PrimaryButton = styled(Button)`
  color: #030;
  /* border-color: #030; */
  background: linear-gradient(135deg, #fff, #dfd);
`;

export const SecondaryButton = styled(Button)`
  color: #222;
  border-color: #222;
  background: linear-gradient(135deg, #fff, #ddd);
`;

export const WarningButton = styled(Button)`
  color: #a22;
  border-color: #a22;
  background: linear-gradient(135deg, #fff, #fdd);
`;
