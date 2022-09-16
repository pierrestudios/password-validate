import { Meta, Story } from "@storybook/react";

import { PasswordField } from "../";
import { PasswordFieldProps } from "../components/PasswordField.types";

export default {
  title: "Example/Password Field",
  component: PasswordField,
  argTypes: {},
} as Meta<typeof PasswordField>;

const Template: Story<PasswordFieldProps> = (args) => (
  <PasswordField {...args} />
);

export const PasswordFieldExample = Template.bind({});
PasswordFieldExample.args = {
  name: "password",
  label: "Enter password",
  placeholder: "Enter password...",
};
