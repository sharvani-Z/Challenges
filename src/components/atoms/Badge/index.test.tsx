import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Badge from "./index";

describe("Badge", () => {
  it("renders with status", () => {
    render(<Badge status="Pending" />);
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("does not render arbitrary children", () => {
    render(
      <Badge status="Completed">
        <span>Icon</span>
      </Badge>,
    );
    expect(screen.queryByText("Icon")).not.toBeInTheDocument();
  });

  it("applies default variant", () => {
    render(<Badge status="Pending" />);
    const badge = screen.getByText("Pending");
    expect(badge).toHaveClass("atom-badge");
  });

  it("applies completed variant", () => {
    render(<Badge status="Completed" />);
    const badge = screen.getByText("Completed");
    expect(badge).toHaveClass("atom-badge");
  });
});
