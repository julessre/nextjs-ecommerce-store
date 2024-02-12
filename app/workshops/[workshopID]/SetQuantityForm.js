'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { addToCart } from './actions';
import styles from './workshopPage.module.scss';

export default function SetQuantityForm(props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <div>
      <form>
        <select
          value={quantity}
          onChange={(event) => setQuantity(event.currentTarget.value)}
          className={styles.quantity}
          data-test-id="product-quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          formAction={async () => {
            router.refresh();
            await addToCart(props.workshopId, quantity);
          }}
        >
          Book Ticket
        </button>
      </form>
    </div>
  );
}
