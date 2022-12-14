import { ChangeEventHandler } from "react";

export interface PasswordFieldProps {
  label: string;
  label_confirm: string; 
  onValidate?: (isValid: boolean, value: string) => void;
  autorun?: boolean;
}

export interface HTMLElementProps {
  styles?: {
    [key: string]: string | number;
  }
} 

export interface FieldInputProps {
  id?: string;
  name: string;
  disabled?: string;
  placeholder: string;
  onInput: ChangeEventHandler<HTMLInputElement>
}

export interface ErrorProps {
  id: number;
  label: string;
}