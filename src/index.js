import React from "react";
import ReactDOM from "react-dom/client";

import "./css/reset.css";
import "./index.css";
import "./css/link.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./components/app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
