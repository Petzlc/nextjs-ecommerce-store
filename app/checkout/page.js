// import { useState } from 'react';
import CheckoutForm from './CheckoutForm.js';

export const metadata = {
  title: 'Checkout',
  description: 'This is the checkout page',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1>This is the Checkout Form</h1>
      <CheckoutForm />
    </div>
  );
}
