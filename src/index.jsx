import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18next";
import { BrowserRouter } from "react-router-dom";
import { MoviesProvider } from "./context/MoviesContext";

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
