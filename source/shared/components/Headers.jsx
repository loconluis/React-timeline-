import React from 'react';
import { Link } from 'react-router';
import styles from './Headers.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
          Mi Primera App con React
      </h1>

      <nav role="navigation" className={styles.navigation}>
        <Link to="/" className={styles.link}>
        Home
        </Link>
        <a href="https://platzi.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Platzi
        </a>
      </nav>
    </header>
  );
}

export default Header;
