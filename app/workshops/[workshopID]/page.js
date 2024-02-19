import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getWorkshopInsecure } from '../../../database/workshops';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import SetQuantityForm from './SetQuantityForm.tsx';
import styles from './workshopPage.module.scss';

export async function generateMetadata(props) {
  const singleWorkshop = await getWorkshopInsecure(props.params.workshopID);

  return {
    title: singleWorkshop?.title,
  };
}

export default async function workshopPage(props) {
  const singleWorkshop = await getWorkshopInsecure(
    Number(props.params.workshopID),
  );

  if (!singleWorkshop) {
    notFound();
  }

  // get cookie and parse it
  const workshopsQuantityCookie = getCookie('quantityCookie');

  const workshopsQuantity = !workshopsQuantityCookie
    ? []
    : parseJson(workshopsQuantityCookie);

  const quantitiesToDisplay = workshopsQuantity.find((workshopQuantity) => {
    return workshopQuantity.id === singleWorkshop.id;
  });

  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.h1}>{singleWorkshop.title}</h1>
      <div className={styles.contentBoxGrid}>
        <div>
          <div className={styles.textHighlight}>
            <div>Date: {singleWorkshop.workshopDate}</div>
            <div>Time: {singleWorkshop.timeframe}</div>
            <div>Price: {singleWorkshop.price} €</div>
          </div>
          <div className={styles.description}>{singleWorkshop.description}</div>
        </div>
        <div>
          <Image
            src={singleWorkshop.image}
            width={250}
            height={300}
            alt={singleWorkshop.title}
            data-test-id="product-image"
          />
        </div>
      </div>
      <div className={styles.bookTicketWrapper}>
        <div>{quantitiesToDisplay?.quantity}</div>
        <SetQuantityForm workshopId={singleWorkshop.id} />
      </div>
    </div>
  );
}
