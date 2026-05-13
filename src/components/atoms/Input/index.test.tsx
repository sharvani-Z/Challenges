import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Input from "./index";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders with value", () => {
    render(<Input value="Hello" />);
    expect(screen.getByDisplayValue("Hello")).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    await user.type(input, "test");
    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it("is a TextField component", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("MuiInputBase-input");
  });
});
