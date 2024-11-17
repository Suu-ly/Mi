import { Toaster } from "@/components/ui/sonner";
import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "react-material-symbols/rounded";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Header from "./components/header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <HelmetProvider>
        <ReactLenis root options={{ duration: 0.8 }}>
          <Header />
          <App />
          <Toaster />
        </ReactLenis>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
