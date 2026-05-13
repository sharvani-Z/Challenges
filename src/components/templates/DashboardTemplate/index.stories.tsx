import type { Meta, StoryObj } from "@storybook/react";
import DashboardTemplate from "./index";

const meta: Meta<typeof DashboardTemplate> = {
  title: "Templates/DashboardTemplate",
  component: DashboardTemplate,
};

export default meta;

export const Default: StoryObj<typeof DashboardTemplate> = {};
