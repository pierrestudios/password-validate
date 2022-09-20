# Welcome to Password Validate

Use this component to create a password and password confirm fields that will validate password entries and display an error for invalid password entries.

This component has two input fields to validate the entry from the user and the following requirements:

- Password has a min length of 6 characters
- Password has at least 1 uppercase character
- Password has at least 1 lowercase character
- Password has at least 1 number
- Password has at least 1 special character (!@#$%^&\*()\_-+={[}]|:;"'<,>.)
- Password and Password confirm inputs must match

It also has a submit button that will trigger validation and present success or why the password entry failed

## To install

`npm install https://github.com/pierrestudios/password-validate`

## To use in React

```js
import PasswordField from "password-validate";

const args = {
  label: "Type your password",
  label_confirm: "Confirm your password",
};

<PasswordField {...args} />;
```

## Advanced settings

### Validation event listener

To listen for validation event on input use, `onValidate` argument in component. The is will return a boolean value for validation result: `true` for valid, `false` for invalid.

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
