import React, { useState } from "react";
import { FC } from "react";

import { ErrorProps, PasswordFieldProps } from "./PasswordField.types";
import {
  StyledWrapper,
  StyledField,
  StyledLabel,
  StyledInput,
} from "./PasswordField.styles";
import { getValidationErrors } from "../utils/validator";

const PasswordField: FC<PasswordFieldProps> = ({
  label = "Enter password",
  label_confirm = "Confirm password",
  onChange = (isValid: boolean) => {},
  autorun = true,
}) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<ErrorProps[]>([]);
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
    if (autorun) {
      const isValid = validate({
        password: passwordValue || password,
        passwordConfirm: passwordConfirmValue || passwordConfirm,
      });
      onChange(isValid);
    }
  };
  const validate = ({
    password,
    passwordConfirm,
  }: {
    password: string;
    passwordConfirm: string;
  }) => {
    setErrors([]);
    const errors: ErrorProps[] = getValidationErrors(password, passwordConfirm);
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <StyledWrapper>
      <StyledField>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          name="password"
          type="password"
          placeholder={`${label}...`}
          onInput={updateInput}
          value={password}
        />
      </StyledField>
      <StyledField>
        <StyledLabel>{label_confirm}</StyledLabel>
        <StyledInput
          name="password-confirm"
          type="password"
          placeholder={`${label_confirm}...`}
          onInput={updateInput}
          value={passwordConfirm}
        />
      </StyledField>
    </StyledWrapper>
  );
};

export default PasswordField;
