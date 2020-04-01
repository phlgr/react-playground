import React from "react";

import PasswordInput from "../components/PasswordInput";

export default {
  title: "Password Input",
  component: PasswordInput
};

export const Empty = () => <PasswordInput value=""></PasswordInput>;
export const NotSafe = () => <PasswordInput value="1"></PasswordInput>;
export const Safe = () => <PasswordInput value="12345"></PasswordInput>;
export const VerySafe = () => (
  <PasswordInput value="1234567890"></PasswordInput>
);
export const TooLong = () => (
  <PasswordInput value="123456789012123214324235"></PasswordInput>
);
