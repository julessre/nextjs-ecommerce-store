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
