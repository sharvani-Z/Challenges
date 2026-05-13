import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Add Challenge",
    variant: "primary",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: "Cancel",
    variant: "secondary",
  },
};
