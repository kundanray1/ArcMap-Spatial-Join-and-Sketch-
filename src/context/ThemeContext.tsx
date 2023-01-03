import React, { createContext, useEffect, useMemo, useState } from 'react';
interface ThemeContextInterface {
  theme: any;
  setTheme?: any;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'default',
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('theme-cyan');

  useEffect(() => {
    if (theme) document.body.classList.add(theme);
  }, [theme, setTheme]);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
