'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { addToCart } from './actions';
import styles from './workshopPage.module.scss';

type Props = {
  workshopId: number;
};

export default function SetQuantityForm(props: Props) {
  const [quantity, setQuantity] = useState('1');
  const router = useRouter();

  return (
    <div>
      <form>
        <input
          value={quantity}
          onChange={(event) => setQuantity(event.currentTarget.value)}
          className={styles.quantity}
          type="number"
          min="1"
          data-test-id="product-quantity"
        />
        {/* <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option> */}
        {/* </input> */}
        <button
          data-test-id="product-add-to-cart"
          formAction={async () => {
            router.refresh();
            await addToCart(props.workshopId, Number(quantity));
          }}
        >
          Book Ticket
        </button>
      </form>
    </div>
  );
}
