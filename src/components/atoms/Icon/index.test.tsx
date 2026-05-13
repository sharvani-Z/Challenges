import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Icon from "./index";

describe("Icon", () => {
  it("renders with label", () => {
    render(<Icon label="home" />);
    const icon = screen.getByLabelText("home");
    expect(icon).toBeInTheDocument();
  });

  it("applies default class", () => {
    render(<Icon label="home" />);
    const icon = screen.getByLabelText("home");
    expect(icon).toHaveClass("atom-icon");
  });
});
