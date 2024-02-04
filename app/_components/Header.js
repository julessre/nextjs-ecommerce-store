import './header.scss';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      <img src="/images/hero-image.jpg" alt="yoga place" />
      <h1 className="text-on-image">
        Immerse Yourself: Elevate Your Being at our magical location
      </h1>
      <div className="sectionContainer">
        <div className="sectionHeader">
          <h2>Headline 2 nettes intro</h2>
        </div>
        <p>
          Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam. Consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam.
        </p>
      </div>
    </div>
  );
}
