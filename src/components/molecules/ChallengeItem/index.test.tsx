import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ChallengeItem from "./index";
import type { Challenge } from "services/ChallengeAPI";

const mockChallenge: Challenge = {
  id: "1",
  title: "Test Challenge",
  status: "Pending",
};

describe("ChallengeItem", () => {
  it("renders challenge title", () => {
    render(<ChallengeItem challenge={mockChallenge} />);
    expect(screen.getByText("Test Challenge")).toBeInTheDocument();
  });

  it("renders status", () => {
    render(<ChallengeItem challenge={mockChallenge} />);
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("calls onAction when toggle button is clicked", async () => {
    const user = userEvent.setup();
    const handleAction = vi.fn();
    render(<ChallengeItem challenge={mockChallenge} onAction={handleAction} />);
    const button = screen.getByRole("button", { name: /mark completed/i });
    await user.click(button);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it("shows correct button text for pending status", () => {
    render(<ChallengeItem challenge={mockChallenge} />);
    expect(
      screen.getByRole("button", { name: /mark completed/i }),
    ).toBeInTheDocument();
  });

  it("shows correct button text for completed status", () => {
    const completedChallenge = {
      ...mockChallenge,
      status: "Completed" as const,
    };
    render(<ChallengeItem challenge={completedChallenge} />);
    expect(
      screen.getByRole("button", { name: /mark pending/i }),
    ).toBeInTheDocument();
  });
});
