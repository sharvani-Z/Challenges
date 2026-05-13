import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Button from "./index";

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Click me" />);
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies primary variant by default", () => {
    render(<Button label="Primary" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("applies secondary variant", () => {
    render(<Button label="Secondary" variant="secondary" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("MuiButton-outlined");
  });
});
