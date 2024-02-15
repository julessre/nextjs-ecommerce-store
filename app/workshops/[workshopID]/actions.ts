'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type WorkshopCookie = {
  id: number;
  quantity: number;
};

export async function addToCart(workshopId: number, quantity: number) {
  const workshopsQuantityCookie = getCookie('cart');

  const workshopsQuantity = !workshopsQuantityCookie
    ? []
    : parseJson(workshopsQuantityCookie);

  const workshopToAdd = workshopsQuantity.find(
    (workshopQuantity: WorkshopCookie) => {
      return workshopQuantity.id === workshopId;
    },
  );

  if (!workshopToAdd) {
    workshopsQuantity.push({ id: workshopId, quantity: quantity });
  } else {
    workshopToAdd.quantity = Number(workshopToAdd.quantity) + Number(quantity);
  }

  await cookies().set('cart', JSON.stringify(workshopsQuantity));
}
