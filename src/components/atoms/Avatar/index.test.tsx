import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Avatar from "./index";

describe("Avatar", () => {
  it("renders initials from name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders single initial when name has one word", () => {
    render(<Avatar name="Cher" />);
    expect(screen.getByText("C")).toBeInTheDocument();
  });

  it("uses avatar styling", () => {
    render(<Avatar name="React User" />);
    const avatar = screen.getByText("RU");
    expect(avatar).toHaveClass("atom-avatar");
  });
});
