import React, {useState} from 'react';

const colorsDark = {
  textColor: '#ddd',
  backgroundColor: '#222',
};

const colorsLight = {
  textColor: '#222',
  backgroundColor: '#fff',
};

const themes = {
  'dark': colorsDark,
  'light': colorsLight,
};

export const ThemeContext = React.createContext();

export function ThemeStore({children}) {
  const defaultTheme = 'light';
  const [theme, setTheme] = useState(defaultTheme);

  const color = name => themes[theme][name];

  const changeTheme = lang => setTheme(theme);

  return (
    <ThemeContext.Provider value={{theme, color, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
