import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Sidebar from "./index";

describe("Sidebar", () => {
  it("renders the sidebar overview content", () => {
    render(<Sidebar />);
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Progress board")).toBeInTheDocument();
    expect(screen.getByText("Next milestone")).toBeInTheDocument();
  });

  it("renders badge summaries", () => {
    render(<Sidebar />);
    expect(
      screen.getByText("Completed", { selector: "p" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Pending", { selector: "p" })).toBeInTheDocument();
  });
});
