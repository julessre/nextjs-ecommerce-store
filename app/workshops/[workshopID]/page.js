import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getWorkshop } from '../../database/database';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import SetQuantityForm from './SetQuantityForm';

export function generateMetadata(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopID));

  return {
    title: singleWorkshop?.title,
  };
}

export default function workshopPage(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopID));

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
    <div>
      <h1>{singleWorkshop.title}</h1>
      <Image
        src={singleWorkshop.image}
        width={250}
        height={300}
        alt={singleWorkshop.title}
        data-test-id="product-image"
      />
      <div>{singleWorkshop.date}</div>
      <div>{singleWorkshop.time}</div>
      <div>
        {singleWorkshop.price} {singleWorkshop.currency}
      </div>
      <div>{singleWorkshop.description}</div>
      <div>{quantitiesToDisplay?.quantity}</div>
      <SetQuantityForm workshopId={singleWorkshop.id} />
    </div>
  );
}
