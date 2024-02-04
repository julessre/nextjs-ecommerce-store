import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getWorkshop } from '../../database/database';

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
      <button data-test-id="product-add-to-cart">Tickets</button>
    </div>
  );
}
