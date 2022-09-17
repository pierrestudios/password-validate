import { Meta, Story } from "@storybook/react";

import { PasswordField } from "../";
import { PasswordFieldProps } from "../types";

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
  label: "Type your password",
  label_confirm: "Confirm your password",
};
