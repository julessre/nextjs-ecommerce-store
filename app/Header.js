import './header.scss';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      <img src="/images/hero-image.jpg" alt="yoga place" />
      <h1 className="text-on-image">
        Immerse Yourself: Elevate Your Being at our Yoga Retreat
      </h1>
    </div>
  );
}
