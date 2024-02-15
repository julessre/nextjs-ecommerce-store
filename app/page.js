import './globals.scss';
import React from 'react';
import Header from './_components/Header.tsx';
import WorkshopOverview from './_components/WorkshopOverview';

export const metadata = {
  title: 'Homepage',
  description: 'This page shows the homepage',
};

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <WorkshopOverview />
      </div>
    </div>
  );
}
