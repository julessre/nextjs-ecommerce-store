import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWorkshopsInsecure } from '../../database/database';

export const metadata = {
  title: 'Workshop page',
  description: 'This page shows all the upcoming workshops',
};

export default async function WorkshopsPage() {
  const workshops = await getWorkshopsInsecure();

  return (
    <div>
      <div>
        <h2>Upcoming Workshops</h2>
      </div>
      <div>
        These are the upcoming workshops:
        {workshops.map((workshop) => {
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
                  <h2>{workshop.title}</h2>
                </div>
                <div>{workshop.workshop_date}</div>
                <div>{workshop.timeframe}</div>
                <div data-test-id="product-price">{workshop.price}</div>
                <div>{workshop.currency}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
