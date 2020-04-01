import React from "react";
import styled from "@emotion/styled";

const PasswordField = styled.input`
  border: 3px solid blue;
  outline: none;
  font-size: 2rem;
  background: ${props =>
    props.value.length < 10
      ? props.value.length !== 0
        ? `hsl(calc(${props.value.length}*10), 100%, 50%)`
        : ""
      : "hsl(100, 100%, 50%)"};
`;

export default function PasswordInput({ value }) {
  const [password, setPassword] = React.useState(value || "");
  return (
    <>
      <PasswordField
        type="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
      ></PasswordField>
    </>
  );
}
