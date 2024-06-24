import { cookies } from 'next/headers.js';
// import { useState } from 'react';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import CheckoutForm from './CheckoutForm.js';

export const metadata = {
  title: 'Checkout',
  description: 'This is the checkout page',
};

export default async function CheckoutPage() {
  // call the total price from the cookies
  // const totalPriceCookie = cookies().get('totalPriceCookie');
  // const totalPrice = totalPriceCookie ? JSON.parse(totalPriceCookie.value) : 0;

  const cartCookie = cookies().get('addQuantityCookie');
  const cartItems = cartCookie ? JSON.parse(cartCookie.value) : [];

  // getting product details    // test
  const allProducts = await getProductsInsecure();

  // getting the products in the cart   // test
  const productsInCart = cartItems.map((item) => {
    const product = allProducts.find((product) => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity,
    };
  });

  // total costs      // test
  const totalPrice = productsInCart.reduce(
    (total, item) => total + item.totalPrice,
    0,
  );

  return (
    <div>
      <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      {/* <h2>Total Price: {totalPrice.toFixed(2)}</h2> */}
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
