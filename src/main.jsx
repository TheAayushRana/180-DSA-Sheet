import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ManageProvider } from "./components/Context/ManageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ManageProvider>
        <App />
      </ManageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
