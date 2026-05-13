import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export default meta;

export const Default: StoryObj<typeof Icon> = {
  args: {
    label: "Star",
  },
};
