import React, { useState } from "react";
import { FC } from "react";

import { PasswordFieldProps } from "./PasswordField.types";
import {
  StyledWrapper,
  StyledField,
  StyledLabel,
  StyledInput,
} from "./PasswordField.styles";

const PasswordField: FC<PasswordFieldProps> = ({
  label = "Enter password",
  label_confirm = "Confirm password",
  onChange = (isValid: boolean) => {},
}) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const updateInput = ({
    currentTarget: elem,
  }: {
    currentTarget: HTMLInputElement;
  }) => {
    let passwordValue;
    let passwordConfirmValue;
    switch (elem.name) {
      case "password-confirm":
        setPasswordConfirm(elem.value);
        passwordConfirmValue = elem.value;
        break;
      case "password":
      default:
        setPassword(elem.value);
        passwordValue = elem.value;
        break;
    }
    const isValid = validate({
      password: passwordValue || password,
      passwordConfirm: passwordConfirmValue || passwordConfirm,
    });
    onChange(isValid);
  };
  const validate = ({
    password,
    passwordConfirm,
  }: {
    password: string;
    passwordConfirm: string;
  }) => {
    return false;
  };
  return (
    <StyledWrapper>
      <StyledField>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          name="password"
          placeholder={`${label}...`}
          onInput={updateInput}
          value={password}
        />
      </StyledField>
      <StyledField>
        <StyledLabel>{label_confirm}</StyledLabel>
        <StyledInput
          name="password-confirm"
          placeholder={`${label_confirm}...`}
          onInput={updateInput}
          value={passwordConfirm}
        />
      </StyledField>
    </StyledWrapper>
  );
};

export default PasswordField;
