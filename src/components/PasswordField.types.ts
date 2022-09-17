import { ChangeEventHandler } from "react";

export interface PasswordFieldProps {
  label: string;
  label_confirm: string; 
  onChange: () => void;
}

export interface ElementStyleProps {
  styles: {
    [key: string]: string | number;
  }
} 

export interface WrapperProps {
  styles?: ElementStyleProps
}

export interface FieldProps {
  styles?: ElementStyleProps
}

export interface LabelProps {
  styles?: ElementStyleProps
}

export interface FieldInputProps {
  id?: string;
  name: string;
  disabled?: string;
  placeholder: string;
  onInput: ChangeEventHandler<HTMLInputElement>
}