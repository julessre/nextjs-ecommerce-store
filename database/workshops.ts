import { cache } from 'react';
import { Workshop } from '../migrations/00000-createTableWorkshops';
import { sql } from './connect';

export const getWorkshopsInsecure = cache(async () => {
  const workshops = await sql<Workshop[]>`
    SELECT
      *
    FROM
      workshops
  `;

  return workshops;
});

export const getWorkshopInsecure = cache(async (id: number) => {
  // Postgres always returns an array
  const [workshop] = await sql<Workshop[]>`
    SELECT
      *
    FROM
      workshops
    WHERE
      id = ${id}
  `;

  return workshop;
});
