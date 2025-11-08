const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    background: '#000000',
    color: '#ffffff',
  },
};

let currentTheme = 'light';

export function useTheme() {
  const setTheme = (theme) => {
    if (themes[theme]) {
      currentTheme = theme;
      document.body.style.backgroundColor = themes[theme].background;
      document.body.style.color = themes[theme].color;
    }
  };

  const getTheme = () => currentTheme;

  return {
    setTheme,
    getTheme,
  };
}