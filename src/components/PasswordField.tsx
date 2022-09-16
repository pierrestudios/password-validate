import React from "react";
import { FC, Fragment } from "react";
import { PasswordFieldProps } from "./PasswordField.types";

const PasswordField: FC<PasswordFieldProps> = ({
  name,
  label,
  placeholder,
}) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input name={name} placeholder={placeholder} />
    </Fragment>
  );
};

export default PasswordField;
