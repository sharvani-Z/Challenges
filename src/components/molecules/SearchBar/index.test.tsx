import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import SearchBar from "./index";

type SearchBarTestProps = {
  onQueryChange?: (query: string) => void;
};

function SearchBarTestWrapper({ onQueryChange }: SearchBarTestProps) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onQueryChange?.(value);
  };

  return <SearchBar query={query} onQueryChange={handleQueryChange} />;
}

describe("SearchBar", () => {
  it("renders input field", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Search tasks...")).toBeInTheDocument();
  });

  it("calls onQueryChange as the user types", async () => {
    const user = userEvent.setup();
    const handleQueryChange = vi.fn();
    render(<SearchBarTestWrapper onQueryChange={handleQueryChange} />);
    const input = screen.getByPlaceholderText("Search tasks...");
    await user.type(input, "test");
    expect(handleQueryChange).toHaveBeenCalledTimes(4);
    expect(handleQueryChange).toHaveBeenLastCalledWith("test");
  });

  it("renders search button", () => {
    render(<SearchBar />);
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });
});
