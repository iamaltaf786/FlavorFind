import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Import HashRouter instead of BrowserRouter
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
