import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import BasicTemplate from "./index";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("BasicTemplate", () => {
  it("renders navigation links", () => {
    renderWithRouter(<BasicTemplate />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders theme toggle button", () => {
    renderWithRouter(<BasicTemplate />);
    expect(
      screen.getByRole("button", { name: /dark mode|light mode/i }),
    ).toBeInTheDocument();
  });

  it("renders layout heading", () => {
    renderWithRouter(<BasicTemplate />);
    expect(screen.getByText("Atomic Dashboard")).toBeInTheDocument();
  });

  it("uses Box layout wrapper", () => {
    renderWithRouter(<BasicTemplate />);
    const heading = screen.getByText("Atomic Dashboard");
    expect(heading.closest("div")).toHaveClass("MuiBox-root");
  });
});
