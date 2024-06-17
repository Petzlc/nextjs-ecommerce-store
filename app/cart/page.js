// import Checkout from '../checkout.js';
// import CheckoutButton from '../CheckoutButton.js';
import Link from 'next/link';
import CheckoutButtonReal from './CheckoutButtonForm';

export const metadata = {
  title: 'Cart',
  description: 'This is the cart page',
};

export default function CartPage() {
  return (
    <div>
      <h1>CartPage</h1>
      <Link href="/CheckoutForm">
        <button>Go to Checkout</button>
      </Link>
      <CheckoutButtonReal />
      {/* <Checkout /> */}
      {/* <CheckoutButton /> */}
    </div>
  );
}
