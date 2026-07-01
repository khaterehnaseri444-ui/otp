import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface DarkModeTypes {
  darkMode: boolean;
  modeButton: () => void;
}

const DarkModeContext = createContext<DarkModeTypes>({
  darkMode: false,
  modeButton: () => {},
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saveMode = localStorage.getItem("darkMode");
    return saveMode === "true";
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);
  const modeButton = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, modeButton }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useTheme = () => useContext(DarkModeContext);
