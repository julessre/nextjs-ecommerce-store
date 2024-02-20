import React from 'react';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'This page appears after a successful order',
};

export default function thankYouPage() {
  return (
    <main className={styles.sectionContainer}>
      <h1>Thank you for your order</h1>
      <div className={styles.thankyouText}>
        Your order has been recieved and a confirmation has been sent to your
        email address.
      </div>
    </main>
  );
}
