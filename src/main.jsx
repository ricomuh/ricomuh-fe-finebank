import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/themeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { NotifContextProvider } from "./context/notifContext.jsx";
import { DarkThemeContextProvider } from "./context/darkThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotifContextProvider>
      <AuthContextProvider>
        <DarkThemeContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </DarkThemeContextProvider>
      </AuthContextProvider>
    </NotifContextProvider>
  </StrictMode>
);
