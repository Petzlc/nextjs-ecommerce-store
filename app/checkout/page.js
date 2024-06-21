// import { cookies } from 'next/headers.js';
// import { useState } from 'react';
import CheckoutForm from './CheckoutForm.js';

export const metadata = {
  title: 'Checkout',
  description: 'This is the checkout page',
};

export default function CheckoutPage() {
  // call the total price from the cookies
  // const totalPriceCookie = cookies().get('totalPriceCookie');
  // const totalPrice = totalPriceCookie ? JSON.parse(totalPriceCookie.value) : 0;
  return (
    <div>
      {/* <h1>This is the Checkout Form</h1> */}
      <div>
        <CheckoutForm />
      </div>
      {/* <div>
        <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      </div> */}
    </div>
  );
}
