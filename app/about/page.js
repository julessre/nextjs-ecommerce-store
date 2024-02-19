import React from 'react';
import styles from './page.module.scss';

export const metadata = {
  title: 'About page',
  description: 'This page shows the about page',
};

export default function AboutPage() {
  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.headline}>This is my about page</h1>
    </div>
  );
}
