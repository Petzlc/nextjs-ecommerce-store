'use client';
import { useRouter } from 'next/navigation';

export default function CheckoutButtonReal() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/checkout');
  };
  return (
    <div>
      <button onClick={handleClick} data-test-id="cart-checkout">
        Checkout
      </button>
    </div>
  );
}
