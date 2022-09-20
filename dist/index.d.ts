interface PasswordFieldProps {
    label: string;
    label_confirm: string;
    onValidate?: (isValid: boolean) => void;
    autorun?: boolean;
}

export { PasswordFieldProps };
