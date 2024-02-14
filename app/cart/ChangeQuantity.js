'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { addQuantity, reduceQuantity } from './actions';
import styles from './page.module.scss';

export default function ChangeQuantity(props) {
  const router = useRouter();

  return (
    <form>
      Quantity: {props.workshop.quantity}
      <button
        className={styles.changeQuantity}
        formAction={async () => {
          router.refresh();
          await addQuantity(props.workshop);
        }}
      >
        +
      </button>
      <button
        className={styles.changeQuantity}
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
