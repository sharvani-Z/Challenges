import TextField from "@mui/material/TextField";

import type { ChangeEvent } from "react";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

function Input({
  placeholder = "",
  value = "",
  onChange,
}: Readonly<InputProps>) {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange?.(event.target.value)
      }
      fullWidth
      variant="outlined"
    />
  );
}

export default Input;
