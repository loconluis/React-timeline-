import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Headers.css';


function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <FormattedMessage id="title" />
      </h1>

      <nav className={styles.navigation}>
        <Link to="/" className={styles.link}>
          <FormattedMessage id="title.home" />
        </Link>
        <a href="https://platzi.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FormattedMessage id="header.nav.platzi" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
