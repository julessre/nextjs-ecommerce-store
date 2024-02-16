import './globals.scss';
import Link from 'next/link';
import React from 'react';
import CartBadge from './cart/CartBadge';

export const metadata = {
  title: {
    default: 'Home page | UpLeveled',
    template: '%s | UpLeveled',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            {/* <CookieBanner /> */}
            <nav>
              <a href="/">
                <img src="./images/logo.png" alt="Logo" className="logo" />
              </a>

              <Link href="/" className="navText">
                Home
              </Link>

              <Link
                href="/workshops"
                className="navText"
                data-test-id="products-link"
              >
                Workshops
              </Link>

              <Link href="/about" className="navText">
                About
              </Link>

              {/* <Link href="/contact" className="navText">
                Contact
              </Link> */}
              <div className="icon" data-test-id="cart-link">
                <a href="/cart">
                  <CartBadge />
                  <img src="./images/bag.svg" alt="shoppingcart" />
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
