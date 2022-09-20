import styled from "styled-components";

import { ElementStyleProps, FieldInputProps } from "./PasswordField.types";

export const StyledWrapper = styled.div<ElementStyleProps>`
  display: block;
  font-family: Arial, Helvetica sans-serif;
`;

export const StyledField = styled.div<ElementStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const StyledErrorHeading = styled.div<ElementStyleProps>`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin: 20px 0 10px;
`;

export const StyledTriggerButton = styled.button<ElementStyleProps>`
  background-color: #0db09b;
  color: #fff;
  font-size: 1em;
  margin: 1em 0;
  padding: 0.5em 1em;
  border: 2px solid #0db09b;
  border-radius: 3px;
`;

export const StyledError = styled(StyledField)`
  border: solid #f4d2d2 2px;
  color: red;
  padding: 5px 10px;
`;

export const StyledLabel = styled.label<ElementStyleProps>`
  margin-bottom: 5px;
`;

export const StyledInput = styled.input<FieldInputProps>`
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 40px;
  padding: 2px 10px;
`;
