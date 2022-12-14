import React from "react";

import { ErrorProps, PasswordFieldProps } from "./PasswordField.types";
import {
  StyledWrapper,
  StyledField,
  StyledLabel,
  StyledInput,
  StyledError,
  StyledErrorHeading,
  StyledTriggerButton,
} from "./PasswordField.styles";
import { getValidationErrors } from "../../utils/validator";

const PasswordField: React.FC<PasswordFieldProps> = ({
  label = "Enter password",
  label_confirm = "Confirm password",
  onValidate = (isValid: boolean, value: string) => {},
  autorun = false,
}) => {
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [errors, setErrors] = React.useState<ErrorProps[] | null>(null);
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
      onValidate(isValid, passwordValue || password);
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
        <StyledLabel htmlFor="password">{label}</StyledLabel>
        <StyledInput
          id="password"
          data-testid="test-password"
          name="password"
          type="password"
          placeholder={`${label}...`}
          onInput={updateInput}
          value={password}
        />
      </StyledField>
      <StyledField>
        <StyledLabel htmlFor="password-confirm">{label_confirm}</StyledLabel>
        <StyledInput
          id="password-confirm"
          data-testid="test-password-confirm"
          name="password-confirm"
          type="password"
          placeholder={`${label_confirm}...`}
          onInput={updateInput}
          value={passwordConfirm}
        />
      </StyledField>

      <StyledWrapper>
        {errors && errors.length === 0 ? (
          <StyledErrorHeading>Your password entry is valid</StyledErrorHeading>
        ) : null}
        {errors && errors.length ? (
          <StyledErrorHeading>
            Please check your password entry. Password needs:
          </StyledErrorHeading>
        ) : null}
        {errors &&
          errors.map((error) => {
            return <StyledError key={error.id}>{error.label}</StyledError>;
          })}
      </StyledWrapper>

      <StyledWrapper>
        <StyledTriggerButton
          onClick={() => {
            const isValid = validate({ password, passwordConfirm });
            onValidate(isValid, password);
          }}
        >
          Validate
        </StyledTriggerButton>
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default PasswordField;
