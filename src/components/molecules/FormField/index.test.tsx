import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import FormField from "./index";

describe("FormField", () => {
  it("renders label and input", () => {
    render(<FormField label="Name" placeholder="Enter name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  it("renders with value", () => {
    render(<FormField label="Name" value="John" />);
    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <FormField
        label="Name"
        placeholder="Enter name"
        onChange={handleChange}
      />,
    );
    const input = screen.getByPlaceholderText("Enter name");
    await user.type(input, "test");
    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});
