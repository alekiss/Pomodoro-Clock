import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { SettingsProvider } from "./context/SettingsContex"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <Home />
    </SettingsProvider>
  </React.StrictMode>
);
