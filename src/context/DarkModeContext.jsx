import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useLocalStorageState(false, "isDarkMode");
  function toggleDarkMode() {
    setDarkMode((isDark) => !isDark);
  }

  useEffect(
    function () {
      isDarkMode
        ? document.documentElement.classList.add("dark-mode")
        : document.documentElement.classList.remove("dark-mode");
    },
    [isDarkMode],
  );
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Dark mode context was used outside the context provider");
  return context;
}
export { DarkModeProvider, useDarkMode };
