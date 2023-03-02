import React from "react";
import { Routes, Route } from "react-router-dom";
import Budget from "./pages/Budget";
import NotFoundPage from "./pages/NotFoundPage";
import AppDashboard from "./pages/AppDashboard"

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<AppDashboard/>} />
        <Route path="/budget" element={<Budget />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
