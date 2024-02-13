'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { clearCookies } from './actions';
import styles from './checkoutPage.module.scss';

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const router = useRouter();

  return (
    <div>
      <div className={styles.form}>
        <h2 className={styles.headline}>Contact Information</h2>
        <div className={styles.smallContainer}>
          <div>
            <label>
              <input
                name="firstName"
                data-test-id="checkout-first-name"
                placeholder="First name"
                value={firstName}
                className={styles.inputField}
                onChange={(event) => setFirstName(event.currentTarget.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              <input
                name="lastName"
                data-test-id="checkout-last-name"
                placeholder="Last name"
                value={lastName}
                className={styles.inputField}
                onChange={(event) => setLastName(event.currentTarget.value)}
                required
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            <input
              name="email"
              data-test-id="checkout-email"
              placeholder="your@email.com"
              value={email}
              className={styles.inputField}
              onChange={(event) => setEmail(event.currentTarget.value)}
              required
            />
          </label>
        </div>
        <div>
          <h2 className={styles.headline}>Shipping Information</h2>
          <div>
            <label>
              <input
                name="address"
                data-test-id="checkout-address"
                placeholder="Address"
                value={address}
                className={styles.inputField}
                onChange={(event) => setAddress(event.currentTarget.value)}
                required
              />
            </label>
          </div>
          <div className={styles.smallContainer}>
            <div>
              <label>
                <input
                  name="city"
                  data-test-id="checkout-city"
                  placeholder="City"
                  value={city}
                  className={styles.inputField}
                  onChange={(event) => setCity(event.currentTarget.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  name="postalCode"
                  data-test-id="checkout-postal-code"
                  placeholder="Postal Code"
                  value={postalCode}
                  className={styles.inputField}
                  onChange={(event) => setPostalCode(event.currentTarget.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div>
            <label>
              <input
                name="country"
                data-test-id="checkout-country"
                placeholder="Country"
                value={country}
                className={styles.inputField}
                onChange={(event) => setCountry(event.currentTarget.value)}
                required
              />
            </label>
          </div>
        </div>
        <div>
          <h2 className={styles.headline}>Payment Information</h2>
          <div>
            <label>
              <input
                name="creditCard"
                data-test-id="checkout-credit-card"
                placeholder="Credit Card Number"
                value={creditCard}
                className={styles.inputField}
                onChange={(event) => setCreditCard(event.currentTarget.value)}
                required
              />
            </label>
          </div>
          <div className={styles.smallContainer}>
            <div>
              <label>
                <input
                  name="expirationDate"
                  data-test-id="checkout-expiration-date"
                  placeholder="MM / YY"
                  value={expirationDate}
                  className={styles.inputField}
                  onChange={(event) =>
                    setExpirationDate(event.currentTarget.value)
                  }
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  name="securityCode"
                  data-test-id="checkout-security-code"
                  placeholder="CVC"
                  value={securityCode}
                  className={styles.inputField}
                  onChange={(event) =>
                    setSecurityCode(event.currentTarget.value)
                  }
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            data-test-id="checkout-confirm-order"
            onClick={async () => {
              await clearCookies();
              router.refresh();
              router.push('/checkout/thankyou');
            }}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
