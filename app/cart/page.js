import Checkout from '../checkout.js';

export const metadata = {
  title: 'Cart',
  description: 'This is the cart page',
};

export default function CartPage() {
  return (
    <div>
      <h1>CartPage</h1>
      <Checkout />
    </div>
  );
}
