import { useTheme } from '../context/ThemeContexr';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>Mini Movie Manager</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
};

export default Header;
