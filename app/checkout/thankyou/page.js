import React from 'react';
import styles from './page.module.scss';

export default function thankYouPage() {
  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Thank you for your order!</h1>
      </div>
      <div className={styles.thankyouText}>
        Your order has been recieved and a confirmation has been sent to your
        email address.
      </div>
    </div>
  );
}
