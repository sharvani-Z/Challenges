import Avatar from "components/atoms/Avatar/index";
import { Box, Typography } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box>
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: "0.16em" }}>
          Task Dashboard
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          Challenge Center
        </Typography>
      </Box>
      <Avatar name="Agile Team" />
    </Box>
  );
}

export default Navbar;
