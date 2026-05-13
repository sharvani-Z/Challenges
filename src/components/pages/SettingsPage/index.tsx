import { useEffect, useState } from "react";
import { useAppTheme } from "context/ThemeContext";
import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Stack,
  Typography,
} from "@mui/material";

function SettingsPage() {
  const { mode, toggleTheme } = useAppTheme();
  const [statusMessage, setStatusMessage] = useState("Checking theme...");

  useEffect(() => {
    setStatusMessage(`Current theme is ${mode}`);
  }, [mode]);

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Typography variant="h4" component="h1">
        Settings Page
      </Typography>
      <Card>
        <CardContent sx={{ display: "grid", gap: 2 }}>
          <Typography variant="subtitle1" color="text.secondary">
            Use React state and context to change app behavior without a full reload.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <FormControlLabel
              control={<Switch checked={mode === "dark"} onChange={toggleTheme} />}
              label={`Theme mode: ${mode}`}
            />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {statusMessage}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SettingsPage;
