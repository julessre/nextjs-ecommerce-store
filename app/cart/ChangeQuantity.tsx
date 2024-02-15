'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { addQuantity, reduceQuantity } from './actions.js';
import styles from './page.module.scss';

type Props = {
  workshop: {
    quantity: number;
  };
};

export default function ChangeQuantity(props: Props) {
  const router = useRouter();

  return (
    <form>
      Quantity: {props.workshop.quantity}
      <button
        className={styles.changeQuantityPlus}
        formAction={async () => {
          router.refresh();
          await addQuantity(props.workshop);
        }}
      >
        +
      </button>
      <button
        className={styles.changeQuantityMinus}
        formAction={async () => {
          router.refresh();
          await reduceQuantity(props.workshop);
        }}
      >
        -
      </button>
    </form>
  );
}
