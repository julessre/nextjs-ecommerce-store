'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addToCart(workshopId, quantity) {
  const workshopsQuantityCookie = getCookie('cart');

  const workshopsQuantity = !workshopsQuantityCookie
    ? []
    : parseJson(workshopsQuantityCookie);

  const workshopToAdd = workshopsQuantity.find((workshopQuantity) => {
    return workshopQuantity.id === workshopId;
  });

  if (!workshopToAdd) {
    workshopsQuantity.push({ id: workshopId, quantity: quantity });
  } else {
    workshopToAdd.quantity = quantity;
  }

  await cookies().set('cart', JSON.stringify(workshopsQuantity));
}
