import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import SettingsPage from "./index";

describe("SettingsPage", () => {
  it("renders settings page heading", () => {
    render(<SettingsPage />);
    expect(screen.getByText("Settings Page")).toBeInTheDocument();
  });

  it("renders theme switch", () => {
    render(<SettingsPage />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("shows theme status message", () => {
    render(<SettingsPage />);
    expect(screen.getByText(/current theme is light/i)).toBeInTheDocument();
  });

  it("toggles theme when switch is clicked", async () => {
    const user = userEvent.setup();
    render(<SettingsPage />);
    const switchElement = screen.getByRole("switch");
    await user.click(switchElement);
    expect(switchElement).toBeInTheDocument();
  });

  it("is a Card component", () => {
    render(<SettingsPage />);
    const card = screen
      .getByText(/Use React state and context/i)
      .closest(".MuiCard-root");
    expect(card).toBeInTheDocument();
  });
});
