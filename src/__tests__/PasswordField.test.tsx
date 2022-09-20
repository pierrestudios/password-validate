import * as React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { PasswordField } from "..";

describe("Test PasswordField component for validator integration", () => {
  test("Check for passed label in fields", () => {
    const args = {
      label: "Type your password",
      label_confirm: "Confirm your password",
    };

    render(<PasswordField {...args} />);

    const passwordLabel = screen.getByText(args.label);

    expect(passwordLabel).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText(`${args.label}...`);

    expect(passwordInput).toBeInTheDocument();

    const passwordConfirmLabel = screen.getByText(args.label_confirm);

    expect(passwordConfirmLabel).toBeInTheDocument();

    const passwordConfirmInput = screen.getByPlaceholderText(
      `${args.label_confirm}...`
    );

    expect(passwordConfirmInput).toBeInTheDocument();
  });
});
