import React from "react";
import styled from "@emotion/styled";

const PasswordField = styled.input`
  border: 3px solid blue;
  outline: none;
  font-size: 2rem;
  background: ${props => [
    props.pass.length < 10
      ? [
          props.pass.length !== 0
            ? `hsl(calc(${props.pass.length}*10), 100%, 50%)`
            : ""
        ]
      : "hsl(100, 100%, 50%)"
  ]};
`;

export default function PasswordInput({ value }) {
  const { pass, setPass } = React.useState("");
  return (
    <>
      <PasswordField
        type="password"
        value={pass}
        onChange={e => {
          setPass(e.target.value);
        }}
      ></PasswordField>
    </>
  );
}
