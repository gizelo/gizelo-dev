import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import App from "./App.tsx";
import "./index.css";

if (import.meta.env.PROD) {
  inject();
}

createRoot(document.getElementById("root")!).render(<App />);
