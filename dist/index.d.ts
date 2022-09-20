interface PasswordFieldProps {
    label: string;
    label_confirm: string;
    onValidate?: (isValid: boolean, value: string) => void;
    autorun?: boolean;
}

export { PasswordFieldProps };
