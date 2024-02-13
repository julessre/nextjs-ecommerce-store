import './header.scss';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      <img src="/images/hero-image.jpg" alt="yoga place" />
      <h1 className="text-on-image">
        Immerse Yourself: Nurture Your Mind, Body and Soul
      </h1>
      <div className="sectionContainer">
        <div className="sectionHeader">
          <h2>
            Our workshops are a mix of creativity, movement, meditation and
            self-discovery.
          </h2>
        </div>
        <p>
          Welcome to our sanctuary of wellness and discovery, where every moment
          is an invitation to reconnect with yourself and the world around you.
          We believe in the transformative power of immersive experiences that
          nourish the mind, body, and soul. Step into a realm where ancient
          practices meet modern wisdom, where the gentle embrace of yoga, the
          sacred ritual of cacao ceremonies, and the therapeutic art of clay
          work harmonize to guide you on a journey of self-discovery and inner
          harmony. Whether you seek to deepen your spiritual connection,
          rejuvenate your body, or simply find solace in the present moment, our
          workshops offer a sanctuary for exploration, growth, and renewal.
        </p>
      </div>
    </div>
  );
}
