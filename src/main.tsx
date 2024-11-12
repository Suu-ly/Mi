import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ReactLenis root options={{ duration: 0.8 }}>
          <Header />
          <App />
          <Footer />
        </ReactLenis>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
