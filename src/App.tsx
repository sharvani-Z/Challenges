import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "components/pages/DashboardPage/index";
import SettingsPage from "components/pages/SettingsPage/index";
import BasicTemplate from "components/templates/BasicTemplate/index";
import { AppThemeProvider } from "context/ThemeContext";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicTemplate />}>
            <Route index element={<DashboardPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
