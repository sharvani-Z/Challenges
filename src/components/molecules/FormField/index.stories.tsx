import type { Meta, StoryObj } from "@storybook/react";
import FormField from "./index";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
};

export default meta;

export const Default: StoryObj<typeof FormField> = {
  args: {
    label: "Challenge Title",
    placeholder: "Enter challenge title",
  },
};
