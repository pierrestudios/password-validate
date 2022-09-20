interface PasswordFieldProps {
    label: string;
    label_confirm: string;
    onChange?: (isValid: boolean) => void;
    autorun?: boolean;
}

export { PasswordFieldProps };
