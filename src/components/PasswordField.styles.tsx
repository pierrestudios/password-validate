import styled from "styled-components";
import {
  WrapperProps,
  FieldProps,
  LabelProps,
  FieldInputProps,
} from "./PasswordField.types";

export const StyledWrapper = styled.div<WrapperProps>`
  display: block;
`;

export const StyledField = styled.div<FieldProps>`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const StyledLabel = styled.label<LabelProps>`
  margin-bottom: 5px;
`;

export const StyledInput = styled.input<FieldInputProps>`
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 40px;
  padding: 2px 10px;
`;
