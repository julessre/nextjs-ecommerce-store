'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function removeItem(workshop) {
  const cookie = getCookie('cart');
  const workshopCookies = !cookie ? [] : parseJson(cookie);

  const removeWorkshop = workshopCookies.filter((workshopCookie) => {
    return workshop.id !== workshopCookie.id;
  });

  await cookies().set('cart', JSON.stringify(removeWorkshop));
}

export async function reduceQuantity(workshop) {
  const cookie = getCookie('cart');
  const workshopCookies = !cookie ? [] : parseJson(cookie);

  const decreaseWorkshop = workshopCookies?.find((workshopCookie) => {
    return workshop.id === workshopCookie.id;
  });

  if (decreaseWorkshop.quantity > 1) {
    decreaseWorkshop.quantity -= 1;
  } else {
    decreaseWorkshop.quantity = 1;
  }

  await cookies().set('cart', JSON.stringify(workshopCookies));
}

export async function addQuantity(workshop) {
  const cookie = getCookie('cart');
  const workshopCookies = !cookie ? [] : parseJson(cookie);

  const increaseWorkshop = workshopCookies?.find((workshopCookie) => {
    return workshop.id === workshopCookie.id;
  });

  increaseWorkshop.quantity += 1;

  await cookies().set('cart', JSON.stringify(workshopCookies));
}
