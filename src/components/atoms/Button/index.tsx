import MuiButton from "@mui/material/Button";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

function Button({
  label,
  variant = "primary",
  onClick,
}: Readonly<ButtonProps>) {
  return (
    <MuiButton
      variant={variant === "primary" ? "contained" : "outlined"}
      color="primary"
      onClick={onClick}
      sx={{ textTransform: "none" }}
    >
      {label}
    </MuiButton>
  );
}

export default Button;
