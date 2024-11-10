import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root options={{ duration: 0.8 }}>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>,
);
