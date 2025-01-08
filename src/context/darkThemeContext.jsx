import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DarkThemeContext = createContext();

export const DarkThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
