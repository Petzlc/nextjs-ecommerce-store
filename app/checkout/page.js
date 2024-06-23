import { cookies } from 'next/headers.js';
// import { useState } from 'react';
import Link from 'next/link';
import CheckoutForm from './CheckoutForm.js';

export const metadata = {
  title: 'Checkout',
  description: 'This is the checkout page',
};

export default function CheckoutPage() {
  // call the total price from the cookies
  const totalPriceCookie = cookies().get('totalPriceCookie');
  const totalPrice = totalPriceCookie ? JSON.parse(totalPriceCookie.value) : 0;
  return (
    <div>
      <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      {/* <h1>This is the Checkout Form</h1> */}
      <div>
        <CheckoutForm />
      </div>
      <br />
      <div>
        <Link href="/cart">Back to the Cart</Link>
      </div>
      <br />
      <div>
        <Link href="/">Back to Homepage</Link>
      </div>
      {/* <div>
        <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      </div> */}
    </div>
  );
}
