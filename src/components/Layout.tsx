import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && prefersDark));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Resume', path: '/#resume' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header__container container">
          <Link to="/" className="layout__header__logo">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="layout__header__nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="layout__header__nav__link"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="layout__header__nav__theme-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="layout__header__mobile-menu">
            <button
              onClick={toggleDarkMode}
              className="layout__header__mobile-menu__button"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="layout__header__mobile-menu__button"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="layout__header__mobile-nav">
            <div className="layout__header__mobile-nav__links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="layout__header__mobile-nav__link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="layout__main container">{children}</main>

      <footer className="layout__footer">
        <div className="layout__footer__container container">
          <div className="layout__footer__content">
            <p className="layout__footer__copyright">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            {/* <div className="layout__footer__links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="layout__footer__link">
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="layout__footer__link">
                LinkedIn
              </a>
              <a href="mailto:your.email@example.com" className="layout__footer__link">
                Email
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;