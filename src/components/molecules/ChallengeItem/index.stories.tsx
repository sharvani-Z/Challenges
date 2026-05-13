import type { Meta, StoryObj } from "@storybook/react";
import ChallengeItem from "./index";

const meta: Meta<typeof ChallengeItem> = {
  title: "Molecules/ChallengeItem",
  component: ChallengeItem,
};

export default meta;

export const Pending: StoryObj<typeof ChallengeItem> = {
  args: {
    challenge: {
      id: "1",
      title: "Build authentication flow",
      status: "Pending",
    },
  },
};

export const Completed: StoryObj<typeof ChallengeItem> = {
  args: {
    challenge: {
      id: "2",
      title: "Finalize dashboard UI",
      status: "Completed",
    },
  },
};
