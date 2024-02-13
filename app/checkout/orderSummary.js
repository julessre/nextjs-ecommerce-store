import Link from 'next/link';
import React from 'react';
import { getWorkshopsInsecure } from '../../database/workshops';
import { getCookie } from '../../util/cookies.js';
import { parseJson } from '../../util/json';
import styles from './checkoutPage.module.scss';

export default async function OrderSummary() {
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
    <div className={styles.orderSummary}>
      <div className={styles.orderContainer}>
        <h2 className={styles.headline}>Your Order</h2>
        <div>
          {workshopsInCart.map((workshop) => {
            return (
              <div
                key={`workshops-${workshop.id}`}
                data-test-id={`cart-product-${workshop.id}`}
              >
                <Link
                  href={`/workshops/${workshop.id}`}
                  data-test-id={`product-${workshop.id}`}
                >
                  <div className={styles.summaryWrapper}>
                    <div className={styles.headline}>
                      <h2>{workshop.title}</h2>
                    </div>
                    <div className={styles.workshopDetails}>
                      <div>Date: {workshop.workshopDate}</div>
                      <div>Time: {workshop.timeframe}</div>
                      <div data-test-id="product-price">
                        Price: € {workshop.price}
                      </div>
                      <div
                        data-test-id={`cart-product-quantity-${workshop.id}`}
                      >
                        Quantity: {workshop.quantity}
                      </div>
                      <div>
                        Total costs: € {workshop.price * workshop.quantity}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.totalPrice}>
          <div data-test-id="cart-total">Total Price: € {totalPrice}</div>
        </div>
      </div>
    </div>
  );
}
