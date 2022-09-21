import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordField } from "..";

describe("Test PasswordField component for validator integration", () => {
  const mockChange = jest.fn();
  const args = {
    label: "Type your password",
    label_confirm: "Confirm your password",
    autorun: false,
    onValidate: mockChange,
  };
  const test_password_bad = "abc";
  const test_password_bad_caps = "ABC";
  const test_password_bad_good = "abcdF@1";

  test("Check for passed labels params in fields", () => {
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

  test("Check for password typed in fields", async () => {
    render(<PasswordField {...args} />);

    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_bad
    );

    expect(screen.getByTestId("test-password")).toHaveValue(test_password_bad);

    await userEvent.type(
      screen.getByTestId("test-password-confirm"),
      test_password_bad
    );

    expect(screen.getByTestId("test-password-confirm")).toHaveValue(
      test_password_bad
    );
  });

  test("Check for passed params, autorun, onValidate in fields", async () => {
    const newArgs = { ...args };
    newArgs.autorun = true;

    render(<PasswordField {...newArgs} />);

    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_bad
    );

    // Note: autorun should cause errors to appear
    expect(
      screen.getByText(/Please check your password entry/i)
    ).toBeInTheDocument();
    expect(mockChange).toHaveBeenCalled();
    expect(mockChange).toBeCalledWith(false, test_password_bad);
  });

  test("Check that Validate button works", async () => {
    render(<PasswordField {...args} />);

    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_bad
    );
    await userEvent.click(screen.getByText("Validate"));

    expect(
      screen.getByText(/Please check your password entry/i)
    ).toBeInTheDocument();
    expect(mockChange).toHaveBeenCalled();
    expect(mockChange).toBeCalledWith(false, test_password_bad);
  });

  test("Check that all validation error displays and clears", async () => {
    render(<PasswordField {...args} />);

    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_bad
    );
    await userEvent.click(screen.getByText("Validate"));

    expect(screen.getByText(/6 or more characters/i)).toBeInTheDocument();
    expect(screen.getByText(/At least 1 number/i)).toBeInTheDocument();
    expect(screen.getByText(/At least 1 uppercase char/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/At least 1 lowercase char/i)
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(
        `At least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/To match password confirm/i)).toBeInTheDocument();

    // Test lowercase char
    await userEvent.clear(screen.getByTestId("test-password"));
    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_bad_caps
    );
    await userEvent.click(screen.getByText("Validate"));

    expect(screen.getByText(/At least 1 lowercase char/i)).toBeInTheDocument();

    // Clear all errors
    await userEvent.clear(screen.getByTestId("test-password"));
    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_bad_good
    );
    await userEvent.type(
      screen.getByTestId("test-password-confirm"),
      test_password_bad_good
    );
    await userEvent.click(screen.getByText("Validate"));

    expect(
      screen.queryByText(/Please check your password entry/i)
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(/Your password entry is valid/i)
    ).toBeInTheDocument();
  });
});
