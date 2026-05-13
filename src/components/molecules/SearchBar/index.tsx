import Button from "components/atoms/Button/index";
import Input from "components/atoms/Input/index";
import { Box } from "@mui/material";

type SearchBarProps = {
  query?: string;
  onQueryChange?: (query: string) => void;
  onSearch?: () => void;
};

function SearchBar({ query = "", onQueryChange, onSearch }: SearchBarProps) {
  return (
    <Box sx={{ display: "grid", gap: 2, width: "100%", maxWidth: 620 }}>
      <Input
        placeholder="Search tasks..."
        value={query}
        onChange={onQueryChange}
      />
      <Button label="Search" variant="secondary" onClick={onSearch} />
    </Box>
  );
}

export default SearchBar;
