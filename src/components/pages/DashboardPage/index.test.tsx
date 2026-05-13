import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DashboardPage from "./index";

describe("DashboardPage", () => {
  it("renders DashboardTemplate", () => {
    render(<DashboardPage />);
    // Since DashboardPage just renders DashboardTemplate, we test the visible heading
    expect(screen.getByText("Challenge Center")).toBeInTheDocument();
  });
});
