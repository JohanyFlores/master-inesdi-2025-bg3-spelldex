import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 1. Importa el BrowserRouter
import { App } from "./app";
import "./index.css";


const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter> 
      <App />
      </BrowserRouter>
    </StrictMode>
  );
}
