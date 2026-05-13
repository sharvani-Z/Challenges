import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "Search challenges...",
  },
};
