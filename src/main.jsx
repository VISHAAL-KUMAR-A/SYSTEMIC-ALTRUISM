import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
// export const apiUrl =
//   process.env.NODE_ENV == "production"
//     ? "https://systemic-altruism.onrender.com"
//     : "http://localhost:3000";
export const apiUrl = "https://systemic-altruism.onrender.com";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
