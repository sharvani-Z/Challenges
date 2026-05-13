import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
};

export default meta;

export const Completed: StoryObj<typeof Badge> = {
  args: {
    status: "Completed",
  },
};

export const Pending: StoryObj<typeof Badge> = {
  args: {
    status: "Pending",
  },
};
