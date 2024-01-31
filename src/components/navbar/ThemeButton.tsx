import { useState } from 'react';

import { IconMoon, IconSun } from '@tabler/icons-react';

export default function ThemeButton() {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme"));

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme); // Ensure localStorage is always updated with the latest theme
      document.documentElement.classList.toggle("dark", newTheme === "dark"); // Remove if present, add if not
      return newTheme;
    });
  };

  return (
    <div className="hover:bg-custom-hover has-tooltip flex items-center justify-center rounded-lg border-2 border-custom-black/50 p-0.5 dark:border-custom-white/50">
      <button onClick={toggleTheme}>
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>
      <span className="tooltip">
        {theme === "dark" ? "Light" : "Dark"} mode
      </span>
    </div>
  );
}
