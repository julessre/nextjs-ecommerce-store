'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function adaptCookie(workshopId, value) {
  const quantitiesWorkshopCookie = getCookie('quantityCookie');

  const quantitiesWorkshop = !quantitiesWorkshopCookie
    ? []
    : parseJson(quantitiesWorkshopCookie);

  const quantitiesToUpdate = quantitiesWorkshop.find((quantityWorkshop) => {
    return quantityWorkshop.id === workshopId;
  });

  if (!quantitiesToUpdate) {
    quantitiesToUpdate.push({ id: workshopId, value: value });
  } else {
    quantitiesToUpdate.value = value;
  }

  await cookies().set('quantitiesWorkshop', JSON.stringify(quantitiesWorkshop));
}
