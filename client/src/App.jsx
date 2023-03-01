import React from "react";
import { Routes, Route } from "react-router-dom";
import AppDashboard from "./pages/AppDashboard";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppDashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
