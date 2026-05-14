import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import DashboardTemplate from "./index";
import { ChallengeAPI } from "services/ChallengeAPI";

vi.mock("services/ChallengeAPI", () => ({
  ChallengeAPI: {
    getAll: vi.fn(),
    create: vi.fn(),
    updateStatus: vi.fn(),
  },
}));

const mockChallenges = [
  { id: "1", title: "Challenge 1", status: "Pending" },
  { id: "2", title: "Challenge 2", status: "Completed" },
];

describe("DashboardTemplate", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (
      ChallengeAPI.getAll as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue(mockChallenges);
  });

  it("renders challenges on load", async () => {
    render(<DashboardTemplate />);

    await waitFor(() => {
      expect(screen.getByText("Challenge 1")).toBeInTheDocument();
      expect(screen.getByText("Challenge 2")).toBeInTheDocument();
    });
  });

  it("renders add challenge form", () => {
    render(<DashboardTemplate />);
    expect(
      screen.getByPlaceholderText("Design a new task section"),
    ).toBeInTheDocument();
  });

  it("adds new challenge", async () => {
    const user = userEvent.setup();
    (
      ChallengeAPI.create as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue({
      id: "3",
      title: "New Challenge",
      status: "Pending",
    });

    render(<DashboardTemplate />);

    const input = screen.getByPlaceholderText("Design a new task section");
    const initialButton = screen.getByRole("button", { name: /enter title/i });

    await act(async () => {
      await user.type(input, "New Challenge");
    });
    const button = await screen.findByRole("button", {
      name: /create challenge/i,
    });
    expect(initialButton).toBeInTheDocument();
    await act(async () => {
      await user.click(button);
    });

    await waitFor(() => {
      expect(ChallengeAPI.create).toHaveBeenCalledWith({
        title: "New Challenge",
        status: "Pending",
      });
    });
  });

  it("toggles challenge status", async () => {
    const user = userEvent.setup();
    (
      ChallengeAPI.updateStatus as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue({
      ...mockChallenges[0],
      status: "Completed",
    });

    render(<DashboardTemplate />);

    await waitFor(() => {
      expect(screen.getByText("Challenge 1")).toBeInTheDocument();
    });

    const toggleButton = screen.getByRole("button", {
      name: /mark completed/i,
    });
    await act(async () => {
      await user.click(toggleButton);
    });

    await waitFor(() => {
      expect(ChallengeAPI.updateStatus).toHaveBeenCalledWith("1", "Completed");
    });
  });

  it("renders challenge section", () => {
    render(<DashboardTemplate />);
    expect(screen.getByText(/Active Challenges/i)).toBeInTheDocument();
  });
});
