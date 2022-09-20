import { getValidationErrors } from "../utils/validator";

describe("Testing validator utils for various inputs", () => {
  test("Run validator on correct input", () => {
    const password = "abcdeF@1";
    const errors = getValidationErrors(password, password);

    expect(errors).toEqual([]);
  });

  test("Run validator on input with less than 6 ", () => {
    const password = "abF@1";
    const [{ label: error }] = getValidationErrors(password, password);

    expect(error).toEqual("6 or more characters");
  });

  test("Run validator on input without a number ", () => {
    const password = "abcdeF@";
    const [{ label: error }] = getValidationErrors(password, password);

    expect(error).toEqual("At least 1 number");
  });

  test("Run validator on input without an uppercase char ", () => {
    const password = "abcde@1";
    const [{ label: error }] = getValidationErrors(password, password);

    expect(error).toEqual("At least 1 uppercase char");
  });

  test("Run validator on input without a special character ", () => {
    const password = "abcdeF1";
    const [{ label: error }] = getValidationErrors(password, password);

    expect(error).toEqual(
      `At least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`
    );
  });

  test("Run validator on input not matching password confirm ", () => {
    const password = "abcdeF@1";
    const [{ label: error }] = getValidationErrors(password, "password1");

    expect(error).toEqual("To match password confirm");
  });
});
