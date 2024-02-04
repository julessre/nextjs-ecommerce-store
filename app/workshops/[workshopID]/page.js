import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { getWorkshop } from '../../database/database';

export function generateMetadata(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopId));

  return {
    title: singleWorkshop?.title,
  };
}

export default function workshopPage(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopId));

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
      />
      <div>
        <h2>{singleWorkshop.title}</h2>
      </div>
      <div>{singleWorkshop.date}</div>
      <div>{singleWorkshop.time}</div>
      <div>
        {singleWorkshop.price} {singleWorkshop.currency}
      </div>
      <div>{singleWorkshop.description}</div>
    </div>
  );
}
