'use client';

import React, { useState } from 'react';
import { adaptCookie } from './actions';

export default function SetQuantityForm(props) {
  const [quantity, setQuantity] = useState('');
  return (
    <div>
      <form>
        <input
          value={quantity}
          onChange={(event) => setQuantity(event.currentTarget.value)}
        />
        <button
          formAction={async () => await adaptCookie(props.workshopId, quantity)}
        >
          Add Quantity
        </button>
      </form>
    </div>
  );
}
