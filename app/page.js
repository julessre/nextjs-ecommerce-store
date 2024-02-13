import './globals.scss';
import React from 'react';
import Header from './_components/Header';
import WorkshopOverivew from './_components/WorkshopOverview';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <WorkshopOverivew />
      </div>
    </div>
  );
}
