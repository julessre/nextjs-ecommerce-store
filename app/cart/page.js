import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWorkshopsInsecure } from '../../database/workshops';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';

export const metadata = {
  title: { default: 'workshops' },
  description: 'Creating memorable workshop experiences',
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
      <h1>Your Cart:</h1>
      <div className={styles.workshopContainer}>
        {workshopsInCart.map((workshop) => {
          return (
            <div
              key={`workshops-${workshop.id}`}
              className={styles.workshopItem}
            >
              <Link
                href={`/workshops/${workshop.id}`}
                data-test-id={`product-${workshop.id}`}
              >
                <Image
                  src={workshop.image}
                  width={250}
                  height={300}
                  alt={workshop.title}
                  className={styles.workshopImage}
                />
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
                    <div>Quantity: {workshop.quantity}</div>
                    <div>
                      Total costs for Workshop: €
                      {workshop.price * workshop.quantity}
                    </div>
                  </div>
                  <br />
                </div>
              </Link>
            </div>
          );
        })}
        <div className={styles.totalPrice}>Total Price: € {totalPrice}</div>
      </div>
    </div>
  );
}
