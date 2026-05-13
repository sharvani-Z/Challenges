import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./index";

describe("Navbar", () => {
  it("renders the dashboard header", () => {
    render(<Navbar />);
    expect(screen.getByText("Task Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Challenge Center")).toBeInTheDocument();
  });

  it("renders the user avatar initials", () => {
    render(<Navbar />);
    expect(screen.getByText("AT")).toBeInTheDocument();
  });
});
