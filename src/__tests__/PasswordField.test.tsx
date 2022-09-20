import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PasswordField from "..";

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

  test("Check for typed password in fields", async () => {
    const args = {
      label: "Type your password",
      label_confirm: "Confirm your password",
    };
    const test_password = "abc";

    render(<PasswordField {...args} />);

    await userEvent.type(screen.getByTestId("test-password"), test_password);

    expect(screen.getByTestId("test-password")).toHaveValue(test_password);

    await userEvent.type(
      screen.getByTestId("test-password-confirm"),
      test_password
    );

    expect(screen.getByTestId("test-password-confirm")).toHaveValue(
      test_password
    );
  });

  test("Check for passed params, autorun, onChange in fields", async () => {
    const mockChange = jest.fn();
    const args = {
      label: "Type your password",
      label_confirm: "Confirm your password",
      autorun: true,
      onChange: mockChange,
    };
    const test_password = "abc";

    render(<PasswordField {...args} />);

    await userEvent.type(screen.getByTestId("test-password"), test_password);

    // Note: autorun should cause errors to appear
    expect(
      screen.getByText(/Please check your password entry/i)
    ).toBeInTheDocument();
    expect(mockChange).toHaveBeenCalled();
    expect(mockChange).toBeCalledWith(false);
  });

  test("Check that Validate button works", async () => {
    const mockChange = jest.fn();
    const args = {
      label: "Type your password",
      label_confirm: "Confirm your password",
      onChange: mockChange,
    };
    const test_password = "abc";

    render(<PasswordField {...args} />);

    await userEvent.type(screen.getByTestId("test-password"), test_password);
    await userEvent.click(screen.getByText("Validate"));

    expect(
      screen.getByText(/Please check your password entry/i)
    ).toBeInTheDocument();
    expect(mockChange).toHaveBeenCalled();
    expect(mockChange).toBeCalledWith(false);
  });

  test("Check that all validation error displays and clears", async () => {
    const args = {
      label: "Type your password",
      label_confirm: "Confirm your password",
    };
    const test_password = "abc";

    render(<PasswordField {...args} />);

    await userEvent.type(screen.getByTestId("test-password"), test_password);
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
    const test_password_caps = "ABC";
    await userEvent.clear(screen.getByTestId("test-password"));
    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_caps
    );
    await userEvent.click(screen.getByText("Validate"));

    expect(screen.getByText(/At least 1 lowercase char/i)).toBeInTheDocument();

    // Clear all errors
    const test_password_good = "abcdF@1";
    await userEvent.clear(screen.getByTestId("test-password"));
    await userEvent.type(
      screen.getByTestId("test-password"),
      test_password_good
    );
    await userEvent.type(
      screen.getByTestId("test-password-confirm"),
      test_password_good
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
