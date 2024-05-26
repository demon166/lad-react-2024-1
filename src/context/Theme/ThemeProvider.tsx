import { createContext, FC, useState } from "react";

export type ThemeVariable = "light" | "dark";

export const ThemeContext = createContext<{
  theme: ThemeVariable;
  setTheme: React.Dispatch<React.SetStateAction<ThemeVariable>>;
}>({
  theme: "light",
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariable>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
