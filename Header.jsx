import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeMode');
    if (
      storedTheme === 'dark' ||
      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('themeMode', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      localStorage.setItem('themeMode', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header id="header">
      <div className="container">
        <a id="logo" href="index.html">
          <img src="images/logo.svg" alt="Silicon logotype" />
        </a>
        <nav id="main-menu" className="navbar">
          <a className="nav-link active" href="#">
            Features
          </a>
          <a className="nav-link active" href="#">
            Contact
          </a>
        </nav>
        <div className="right-controls">
          <div id="darkmode-toggle-switch" className="btn-toggle-switch">
            <span className="label">Dark mode</span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
              <input
                id="darkmode-switch"
                type="checkbox"
                checked={isDarkMode}
                onChange={handleThemeToggle}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <a id="auth-signin" href="#" className="btn-primary">
            <i className="fa-thin fa-user-large"></i>
            <span> Sign in / up</span>
          </a>
          <button className="btn-mobile">
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


