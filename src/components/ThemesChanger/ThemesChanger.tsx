import { ChangeEventHandler, useContext } from "react";
import { ThemeContext } from "@/context";
import { ThemeVariable } from "@/context/Theme";

const ThemesChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.target.value as ThemeVariable);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          id="theme-light"
          onChange={handleChange}
          checked={theme === "light"}
        />
        Светлая тема
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          id="theme-dark"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        Темная тема
      </label>
    </div>
  );
};

export default ThemesChanger;
