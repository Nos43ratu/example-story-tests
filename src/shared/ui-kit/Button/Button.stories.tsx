import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Button from "./Button";
import { ButtonSize, ButtonVariant } from "./ButtonTypes";

export default {
  title: "ui-kit/Button",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: ButtonVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariant.PRIMARY,
};

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.L,
};

export const Medium = Template.bind({});
Medium.args = {
  size: ButtonSize.M,
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.S,
};
