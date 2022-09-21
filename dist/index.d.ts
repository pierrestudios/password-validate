import React from 'react';

interface PasswordFieldProps {
    label: string;
    label_confirm: string;
    onValidate?: (isValid: boolean, value: string) => void;
    autorun?: boolean;
}

declare const PasswordField: React.FC<PasswordFieldProps>;

export { PasswordField };
