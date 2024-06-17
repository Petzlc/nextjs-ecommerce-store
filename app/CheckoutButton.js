'use client';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CheckoutButton() {
  const [checkout, setCheckout] = useState();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/Checkout');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Go to Checkout</button>
    </div>
  );
}
