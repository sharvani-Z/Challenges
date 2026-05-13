import Badge from "components/atoms/Badge/index";
import { Box, Paper, Stack, Typography } from "@mui/material";

function Sidebar() {
  return (
    <Box sx={{ display: "grid", gap: 3, p: 3 }}>
      <Box>
        <Typography variant="overline" color="text.secondary">
          Overview
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Progress board
        </Typography>
      </Box>
      <Stack spacing={1}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>Completed</Typography>
          <Badge status="Completed" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>Pending</Typography>
          <Badge status="Pending" />
        </Box>
      </Stack>
      <Paper variant="outlined" sx={{ p: 2, bgcolor: "background.paper" }}>
        <Typography variant="subtitle2" color="text.secondary">
          Next milestone
        </Typography>
        <Typography sx={{ mt: 1 }}>Share report by Friday</Typography>
      </Paper>
    </Box>
  );
}

export default Sidebar;
