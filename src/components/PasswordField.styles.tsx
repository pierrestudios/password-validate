import styled from "styled-components";

import { ElementStyleProps, FieldInputProps } from "./PasswordField.types";

export const StyledWrapper = styled.div<ElementStyleProps>`
  display: block;
`;

export const StyledField = styled.div<ElementStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const StyledErrorHeading = styled.div<ElementStyleProps>`
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
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
  color: red;
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
