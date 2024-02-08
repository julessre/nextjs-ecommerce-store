import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWorkshopsInsecure } from '../../database/database';
import styles from './page.module.scss';

export const metadata = {
  title: 'Workshop page',
  description: 'This page shows all the upcoming workshops',
};

export default async function WorkshopsPage() {
  const workshops = await getWorkshopsInsecure();

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Upcoming Workshops</h1>
      </div>
      <div>
        <div className={styles.workshopContainer}>
          {workshops.map((workshop) => {
            return (
              <div key={`workshops-${workshop.id}`}>
                <Link
                  href={`/workshops/${workshop.id}`}
                  data-test-id={`product-${workshop.id}`}
                  className={styles.workshopItem}
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
                    <div>Date: {workshop.workshopDate}</div>
                    <div>Time: {workshop.timeframe}</div>
                    <div data-test-id="product-price">
                      Price: € {workshop.price}
                    </div>
                    <br />
                    <div>
                      {workshop.description.length > 100
                        ? workshop.description.slice(
                            0,
                            workshop.description.lastIndexOf(' ', 300),
                          )
                        : workshop.description}
                      {workshop.description.length > 300 && ' [...]'}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
