import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import AddChallengeForm from "./index";

describe("AddChallengeForm", () => {
  it("renders form fields", () => {
    render(<AddChallengeForm />);
    expect(
      screen.getByRole("textbox", { name: /challenge title/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /enter title/i }),
    ).toBeInTheDocument();
  });

  it("calls onAddChallenge when form is submitted", async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<AddChallengeForm onAddChallenge={handleAdd} />);
    const input = screen.getByRole("textbox", { name: /challenge title/i });
    const button = screen.getByRole("button", { name: /enter title/i });

    await user.type(input, "New Challenge");
    await user.click(button);

    expect(handleAdd).toHaveBeenCalledWith({
      title: "New Challenge",
      status: "Pending",
    });
  });

  it("clears input after submission", async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<AddChallengeForm onAddChallenge={handleAdd} />);
    const input = screen.getByRole("textbox", { name: /challenge title/i });
    const button = screen.getByRole("button", { name: /enter title/i });

    await user.type(input, "New Challenge");
    await user.click(button);

    expect(input).toHaveValue("");
  });

  it("renders inside a Box layout", () => {
    render(<AddChallengeForm />);
    const heading = screen.getByText("Add a new challenge");
    const wrapper = heading.parentElement;
    expect(wrapper).toHaveClass("MuiBox-root");
  });
});
