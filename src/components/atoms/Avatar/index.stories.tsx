import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
};

export default meta;

export const Default: StoryObj<typeof Avatar> = {
  args: {
    name: "Jane Doe",
  },
};
