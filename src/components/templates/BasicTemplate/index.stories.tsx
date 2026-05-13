import { MemoryRouter, Route, Routes } from "react-router-dom";
import BasicTemplate from "./index";
import { AppThemeProvider } from "context/ThemeContext";
import { Box, Typography } from "@mui/material";

export default {
  title: "Templates/BasicTemplate",
  component: BasicTemplate,
};

function ExamplePage({ text }: { text: string }) {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">{text}</Typography>
      <Typography color="text.secondary">This route renders without full page reload.</Typography>
    </Box>
  );
}

export const Default = () => (
  <AppThemeProvider>
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<BasicTemplate />}>
          <Route index element={<ExamplePage text="Dashboard Page" />} />
          <Route path="settings" element={<ExamplePage text="Settings Page" />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </AppThemeProvider>
);
