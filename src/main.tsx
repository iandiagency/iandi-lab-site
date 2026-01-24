import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { initMetaPixel } from "@/lib/metaPixel";

// 🔥 Inicializa o Meta Pixel UMA ÚNICA VEZ
initMetaPixel(import.meta.env.VITE_META_PIXEL_ID);

// Debug temporário
console.log("PIXEL ID:", import.meta.env.VITE_META_PIXEL_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
