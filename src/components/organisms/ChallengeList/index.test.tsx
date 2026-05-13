import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChallengeList from "./index";
import type { Challenge } from "services/ChallengeAPI";

const mockChallenges: Challenge[] = [
  { id: "1", title: "Challenge 1", status: "Pending" },
  { id: "2", title: "Challenge 2", status: "Completed" },
];

describe("ChallengeList", () => {
  it("renders list of challenges", () => {
    render(<ChallengeList challenges={mockChallenges} />);
    expect(screen.getByText("Challenge 1")).toBeInTheDocument();
    expect(screen.getByText("Challenge 2")).toBeInTheDocument();
  });

  it("renders empty state when no challenges", () => {
    render(<ChallengeList challenges={[]} />);
    expect(
      screen.getByText("No challenges yet. Add a task to get started."),
    ).toBeInTheDocument();
  });

  it("passes challenge items into the list", () => {
    const handleToggle = vi.fn();
    render(
      <ChallengeList
        challenges={mockChallenges}
        onToggleStatus={handleToggle}
      />,
    );
    expect(screen.getByText("Challenge 1")).toBeInTheDocument();
    expect(screen.getByText("Challenge 2")).toBeInTheDocument();
  });

  it("renders a challenge item container", () => {
    render(<ChallengeList challenges={mockChallenges} />);
    expect(screen.getByText("Challenge 1").closest("div")).toBeTruthy();
  });
});
