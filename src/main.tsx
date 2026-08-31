import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import UrbanCrewPage from "./pages/UrbanCrewPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/urban-crew" element={<UrbanCrewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
