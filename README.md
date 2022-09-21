# Welcome to Password Validate

Use this React component to create a password and password confirm fields that will validate password entries and display errors for invalid entries.

The component has two input fields to validate entries from the user and the following requirements:

- Password has a min length of 6 characters
- Password has at least 1 uppercase character
- Password has at least 1 lowercase character
- Password has at least 1 number
- Password has at least 1 special character (!@#$%^&\*()\_-+={[}]|:;"'<,>.)
- Password and Password confirm inputs must match

It also has a submit button that will trigger validation and present success or why the password entry failed

![Password Validate errors screenshot](/screenshot.jpg?raw=true)

## To install

`npm install https://github.com/pierrestudios/password-validate`

## To use in React

```js
import { PasswordField } from "@pierrestudios/password-validate";

const args = {
  label: "Type your password",
  label_confirm: "Confirm your password",
};

<PasswordField {...args} />;
```

## Advanced settings

### Validation event listener

To listen for validation event on input use, `onValidate` argument in component. The is will return a boolean value as the first argument for validation result: `true` for valid, `false` for invalid. And it returns a string for the second argument for the value entered.

```js
...
const args = {
  ...,
  onValidate: (isValid, value) => console.log(isValid, value)
};

<PasswordField {...args} />;
```

### Enable autorun

To run validation on input change event, pass argument, `autorun=true` to component.

```js
...
const args = {
  ...,
  autorun: true
};

<PasswordField {...args} />;
```

### Custom styling

Coming soon

### Custom validation messages

Coming soon

## License

[MIT License](https://choosealicense.com/licenses/mit/)
