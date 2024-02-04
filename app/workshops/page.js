import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWorkshops } from '../database/database';

export const metadata = {
  title: 'Workshop page',
  description: 'This page shows all the upcoming workshops',
};

export default function WorkshopPage() {
  const workshops = getWorkshops();

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
              <Link href={`/workshops/${workshop.id}`}>
                <Image
                  src={workshop.image}
                  width={250}
                  height={300}
                  alt={workshop.title}
                />
                <div>
                  <h2>{workshop.title}</h2>
                </div>
                <div>{workshop.date}</div>
                <div>{workshop.time}</div>
                <div>
                  {workshop.price} {workshop.currency}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
