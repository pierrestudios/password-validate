const specs = [
  { label: "6 or more characters", id: 1, validator: (password: string) => password.length >= 6 },
  {
    label: "At least 1 number",
    id: 2,
    validator: (password: string) => {
      const strArr = password.split("");
      const numberStrs = strArr.filter((char: string) => {
        return Number.isInteger(parseInt(char));
      });

      return numberStrs.length > 0;
    },
  },
  {
    label: "At least 1 uppercase char",
    id: 3,
    validator: (password: string) =>
      password
      .replace(/[^a-z]/gmi, "")
      .split("")
      .filter((char) => char.toUpperCase() === char).length > 0,
  },
  {
    label: "At least 1 lowercase char",
    id: 4,
    validator: (password: string) =>
      password.split("").filter((char) => char.toLowerCase() === char).length > 0,
  },
  {
    label: `At least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`,
    id: 5,
    validator: (password: string) => {
      const specialChars = `!@#$%^&*()_-+={[}]|:;"'<,>.`;
      return password.split("").filter((char) => specialChars.indexOf(char) !== -1).length > 0
    }
  },
  { label: "To match password confirm", id: 6, validatorConfirm: (password: string, passwordConfirm: string) => !!password && password === passwordConfirm },
];

export function getValidationErrors(password: string = "", passwordConfirm: string = "") {
  return specs
    .filter((v) => {
      if (typeof v.validatorConfirm === "function") {
        return v.validatorConfirm(password, passwordConfirm) === false;
      } else if (typeof v.validator === "function") {
        return v.validator(password) === false;
      }

      return false;
    })
    .map(({ id, label }) => ({
      id,
      label,
    }));
}