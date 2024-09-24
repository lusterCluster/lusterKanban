import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/main.tsx";
import ProvideThemeContext from "./store/context/theme/main.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProvideThemeContext>
      <RouterProvider router={router} />
    </ProvideThemeContext>
  </StrictMode>
);
