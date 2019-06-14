import React from "react";
import styled from "styled-components";
const Input = styled.input`
  display: block;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.1rem;
  border-top: 0;
  border-bottom: 0;
`;
export const Number = ({
  value,
  onChange,
  label,
  ...props
}: {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => (
  <label>
    {label}
    <Input type="number" value={value} onChange={onChange} {...props} />
  </label>
);
