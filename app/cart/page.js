import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWorkshopsInsecure } from '../../database/workshops';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ChangeQuantity from './ChangeQuantity.tsx';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: { default: 'Cart Page' },
  description: 'Cart Pages is showing all selected workshops',
};

export default async function CartPage() {
  const workshops = await getWorkshopsInsecure();

  // get the cookies
  const cookie = getCookie('cart');
  const workshopCookies = !cookie ? [] : parseJson(cookie);

  // check which workshops are in cookies
  const workshopsWithCookies = workshops.map((workshop) => {
    const workshopFromCookies = workshopCookies.find(
      (workshopCookie) => workshop.id === workshopCookie.id,
    );
    return { ...workshop, quantity: workshopFromCookies?.quantity };
  });

  // new variable with all products with quantity
  const workshopsInCart = workshopsWithCookies.filter(
    (workshop) => workshop.quantity,
  );

  const totalPrice = workshopsInCart.reduce(
    (accumulator, workshop) => accumulator + workshop.price * workshop.quantity,
    0,
  );

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Your Cart:</h1>
      </div>
      <div className={styles.workshopContainer}>
        {workshopsInCart.map((workshop) => {
          const workshopSubTotal = () => {
            return Number(workshop.quantity) * Number(workshop.price);
          };
          return (
            <div
              key={`workshops-${workshop.id}`}
              data-test-id={`cart-product-${Number(workshop.id)}`}
              className={styles.workshopItem}
            >
              <Link href={`/workshops/${workshop.id}`}>
                <Image
                  src={workshop.image}
                  width={250}
                  height={300}
                  alt={workshop.title}
                  className={styles.workshopImage}
                />
              </Link>
              <div className={styles.workshopDetails}>
                <div className={styles.headline}>
                  <h2>{workshop.title}</h2>
                </div>
                <div>
                  <div>Date: {workshop.workshopDate}</div>
                  <div>Time: {workshop.timeframe}</div>
                  <div data-test-id="product-price">
                    Price: € {workshop.price}
                  </div>
                  <div>
                    <ChangeQuantity workshop={workshop} />
                  </div>
                  <div>Total costs for Workshop: € {workshopSubTotal()}</div>
                </div>
                <div
                  data-test-id={`cart-product-remove-${Number(workshop.id)}`}
                >
                  <RemoveButton workshop={workshop} />
                </div>
                <br />
              </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
      <div className={styles.line} />
      <div className={styles.sectionCheckout}>
        <div className={styles.totalPrice}>
          Total Price: € <span data-test-id="cart-total">{totalPrice}</span>
        </div>
        <div>
          <Link
            href="/checkout"
            type="button"
            data-test-id="cart-checkout"
            className={styles.checkoutButton}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
