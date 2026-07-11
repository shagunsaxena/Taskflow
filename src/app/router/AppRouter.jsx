import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../../features/auth/pages/LoginPage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import DesignSystemPage from "../../features/dev/pages/DesignSystemPage";

import ProtectedRoute from "../../components/routes/ProtectedRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/dev/components"
          element={<DesignSystemPage />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;