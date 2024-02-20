'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { addQuantity, reduceQuantity } from './actions.js';
import styles from './page.module.scss';

type Props = {
  workshop: {
    quantity: number;
    id: number;
  };
};

export default function ChangeQuantity(props: Props) {
  const router = useRouter();

  return (
    <form>
      <span data-test-id={`cart-product-quantity-${props.workshop.id}`}>
        Quantity: {props.workshop.quantity}{' '}
      </span>
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
