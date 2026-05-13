import Input from "components/atoms/Input/index";
import { Box, Typography } from "@mui/material";

type FormFieldProps = {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

function FormField({
  label,
  value,
  placeholder,
  onChange,
}: Readonly<FormFieldProps>) {
  return (
    <Box sx={{ display: "grid", gap: 1, mb: 2 }}>
      <Typography sx={{ color: "text.secondary", fontWeight: 600 }}>
        {label}
      </Typography>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </Box>
  );
}

export default FormField;
