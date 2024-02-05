'use client';

import React, { useState } from 'react';
import { adaptCookie } from './actions';

export default function SetQuantityForm() {
  const [quantity, setQuantity] = useState('');
  return (
    <div>
      <form>
        <input
          value={quantity}
          onChange={(event) => setQuantity(event.currentTarget.value)}
        />
        <button formAction={async () => await adaptCookie(quantity)}>
          Add Quantity
        </button>
      </form>
    </div>
  );
}
