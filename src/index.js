import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ActionProvider } from "./components/context/Actionprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActionProvider>
      <App />
    </ActionProvider>
  </React.StrictMode>
);
