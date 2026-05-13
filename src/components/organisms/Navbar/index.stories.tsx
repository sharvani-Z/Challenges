import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Organisms/Navbar",
  component: Navbar,
};

export default meta;

export const Default: StoryObj<typeof Navbar> = {};
