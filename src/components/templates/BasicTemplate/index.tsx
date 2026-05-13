import { Outlet, Link as RouterLink } from "react-router-dom";
import { useAppTheme } from "context/ThemeContext";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

function BasicTemplate() {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <AppBar position="static" color="primary" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ fontWeight: 700 }}
              >
                Atomic Dashboard
              </Typography>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.95rem" }}
              >
                Dashboard
              </Link>
              <Link
                component={RouterLink}
                to="/settings"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.95rem" }}
              >
                Settings
              </Link>
            </Box>
            <Button color="inherit" onClick={toggleTheme}>
              {mode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default BasicTemplate;
