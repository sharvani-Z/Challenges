import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./index";

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  component: SearchBar,
};

export default meta;

export const Default: StoryObj<typeof SearchBar> = {
  args: {
    query: "",
  },
};
