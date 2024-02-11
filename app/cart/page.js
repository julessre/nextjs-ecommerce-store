import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWorkshopsInsecure } from '../../database/workshops';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  title: { default: 'workshops' },
  description: 'Creating memorable workshop experiences',
};

export default async function CartPage() {
  const workshops = await getWorkshopsInsecure();

  // to get the cookies
  const cookie = getCookie('cart');
  const workshopCookies = !cookie ? [] : parseJson(cookie);

  // to check which workshops are in cookies
  const workshopsWithCookies = workshops.map((workshop) => {
    const workshopFromCookies = workshopCookies.find(
      (workshopCookie) => workshop.id === workshopCookie.id,
    );
    return { ...workshop, quantity: workshopFromCookies?.quantity };
  });

  const workshopsInCart = workshopsWithCookies.filter(
    (workshop) => workshop.quantity,
  );

  return (
    <div>
      {workshopsInCart.map((workshop) => {
        return (
          <div key={`workshops-${workshop.id}`}>
            <Link
              href={`/workshops/${workshop.id}`}
              data-test-id={`product-${workshop.id}`}
            >
              <Image
                src={workshop.image}
                width={250}
                height={300}
                alt={workshop.title}
              />
              <div>
                <div>
                  <h2>{workshop.title}</h2>
                </div>
                <div>Date: {workshop.workshopDate}</div>
                <div>Time: {workshop.timeframe}</div>
                <div data-test-id="product-price">
                  Price: € {workshop.price}
                </div>
                <div>Quantity: {workshop.quantity}</div>
                <br />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
